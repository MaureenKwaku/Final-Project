const { RentalModel } = require('./model');
const { UserModel } = require('../user/model');
const { CarModel } = require('../car/model');
const { PaymentModel } = require('../payment/model');
const { modelManager } = require('../../helpers');
const moment = require('moment');
const { __initializePayment } = require('../../helpers/payment');
const { __generateCode } = require('../../helpers/code');

//get all rentals based on a filter
async function getRentals({
  filter: { search, dateRange, order, orderBy, ...filter },
  pagination,
}) {
  try {
    let __rental = await modelManager.getDocuments({
      model: RentalModel,
      search,
      dateRange,
      filter: { ...filter, isDeleted: false },
      order,
      orderBy,
      searchFields: [],
      pagination,
      populate: 'car createdBy payment',
    });
    return __rental;
  } catch (err) {
    throw err;
  }
}

//get all rentals length based on a filter
async function getRentalsLength({ filter: { search, dateRange, order, orderBy, ...filter } }) {
  try {
    let __rentalsLength = await modelManager.countDocuments({
      model: RentalModel,
      search,
      dateRange,
      filter: { ...filter, isDeleted: false },
      searchFields: [],
    });
    return __rentalsLength;
  } catch (err) {
    throw err;
  }
}

// get a rental based on an id
async function getRental({ filter: { rentalId } }) {
  try {
    let __rental = await RentalModel.findById(rentalId);
    return __rental;
  } catch (err) {
    throw err;
  }
}

const getComputedAmount = ({ pickupTime, dropoffTime }, car) => {
  let start = moment(pickupTime);
  let end = moment(dropoffTime);
  var duration = moment.duration(end.diff(start));
  let hours = duration.asHours();
  return hours * car.price;
};

// create new rental
async function createRental({ input }, userId) {
  try {
    //get car price per hour
    const __car = await CarModel.findById(input.car).select('_id price').lean();

    // get user
    const __user = await UserModel.findById(userId).select('_id email').lean();
    let __cost = getComputedAmount(input, __car);
    let __newRental = new RentalModel({
      car: input.car,
      amount: __cost,
      pickup: {
        at: input.pickupTime,
        address: input.pickupAddress,
      },
      dropoff: {
        at: input.dropoffTime,
        address: input.dropoffAddress,
      },
      createdBy: userId,
    });

    let __newPayment = new PaymentModel({
      code: await __generateCode(PaymentModel),
      amount: __cost,
      rental: __newRental.id,
      createdBy: userId,
    });

    // initialize payment
    const __paymentResponse = await __initializePayment({
      amount: __payment.amount,
      email: __user.email,
      reference: __payment.code,
    });
    if (__paymentResponse.status === true && __paymentResponse.data) {
      __payment.authorizationUrl = __paymentResponse.data.authorization_url;
      __payment.accessCode = __paymentResponse.data.access_code;
    } else {
      throw new Error('AnErrorOccurred\nTryAgain');
    }

    try {
      await Promise.all([__newRental.save(), __newPayment.save()]);
    } catch (error) {
      return error;
    }
    return __newPayment;
  } catch (err) {
    return err;
  }
}

// cancel a rental based on an id
async function cancelRental({ input: { rentalId, reason } }) {
  try {
    await RentalModel.findByIdAndUpdate(rentalId, {
      status: 'Cancelled',
      cancellation: {
        reason,
        at: new Date(),
      },
    });

    return true;
  } catch (err) {
    throw err;
  }
}

// approveRental a rental based on an id
async function approveRental({ input: { rentalId } }, adminId) {
  try {
    await RentalModel.findByIdAndUpdate(rentalId, {
      status: 'Accepted',
      accepted: {
        by: adminId,
        at: new Date(),
      },
    });

    return true;
  } catch (err) {
    throw err;
  }
}

// approveRental a rental based on an id
async function pickupRental({ input: { rentalId } }) {
  try {
    let __rental = await RentalModel.findById(rentalId);

    await RentalModel.findByIdAndUpdate(rentalId, {
      status: 'PickedUp',
      pickedUpAt: new Date(),
    });
    return true;
  } catch (err) {
    throw err;
  }
}

// finishRentalProcess a rental based on an id
async function finishRentalProcess({ input: { rentalId } }) {
  try {
    let __rental = await RentalModel.findById(rentalId);

    await RentalModel.findByIdAndUpdate(rentalId, {
      status: 'DroppedOff',
      droppedOffAt: new Date(),
    });
    return true;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getRental,
  getRentals,
  getRentalsLength,
  createRental,
  cancelRental,
  approveRental,
  pickupRental,
  finishRentalProcess,
};
