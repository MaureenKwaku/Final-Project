import Head from "next/head";
import { Fragment, useEffect } from "react";
import Footer from "../../components/footer";
import { withApollo } from "../../lib/apollo";
import Header from "../../components/headerForProduct";
import { GET_CAR, GET_CARS } from "../../lib/graphql/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuthContext } from "../_app";

const Car = () => {
  const [, userData] = useAuthContext();
  const { data: cars, loading: loadCars } = useQuery(GET_CARS, {
    variables: { limit: 4, filter: { featured: true } },
  });
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(GET_CAR, {
    variables: { id },
  });

  return (
    <Fragment>
      <Head>
        <title>Car | Rent-A-Ride Rental Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fragment>
        <Header />

        <div class="small-container single-product">
          {loading ? (
            <Fragment>
              <div className={"row"}>loading...</div>
            </Fragment>
          ) : (
            <Fragment>
              <div class="row">
                <div class="col-2">
                  <img src={data?.car?.images?.[0]} width="100%" />
                </div>
                <div class="col-2">
                  <p>
                    <a href="/cars" style={{ color: "rgb(233, 174, 64)" }}>
                      Home
                    </a>
                    / {data?.car?.make}
                  </p>
                  <h3 className="font-bold text-3xl text-gray-700 my-5">
                    {data?.car?.make} {data?.car?.model}
                  </h3>
                  <h3 className={"font-medium"}>
                    GH&cent; {data?.car?.price} per hour
                  </h3>

                  <h3 className={"flex flex-row mt-5"}>
                    Plate Number{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </h3>
                  <p className={"font-light text-sm -ml-1"}>
                    {data?.car?.plateNumber}
                  </p>

                  {data?.car?.vin && (
                    <Fragment>
                      <h3 className={"flex flex-row mt-5"}>
                        VIN{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h3>
                      <p className={"font-light text-sm -ml-1"}>
                        {data?.car?.vin}
                      </p>
                    </Fragment>
                  )}

                  {data?.car?.chassis && (
                    <Fragment>
                      <h3 className={"flex flex-row mt-5"}>
                        Chassis{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h3>
                      <p className={"font-light text-sm -ml-1"}>
                        {data?.car?.chassis}
                      </p>
                    </Fragment>
                  )}

                  {data?.car?.description && (
                    <Fragment>
                      <h3 className={"flex flex-row mt-3"}>
                        Description{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h3>
                      <p className={"font-light text-sm -ml-1"}>
                        {data?.car?.description}
                      </p>
                    </Fragment>
                  )}
                </div>
              </div>
            </Fragment>
          )}{" "}
        </div>

        <section class="mainForBook">
          <form class="small-container">
            <h2 class="title text-3xl font-medium">Fill Form To Rent</h2>
            <div className={"grid grid-cols-2 gap-6 mb-10"}>
              <div>
                <label htmlFor="email-address" className="">
                  Pickup Location
                </label>
                <input
                  type="text"
                  required
                  className="appearance-none mt-3 relative block w-full px-3 py-4 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Location here eg. Accra Mall"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Return Location
                </label>
                <input
                  type="text"
                  required
                  className="appearance-none mt-3 relative block w-full px-3 py-4 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Location here eg. Accra Mall"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Pickup Date
                </label>
                <input
                  type="date"
                  required
                  className="appearance-none mt-3 relative block w-full px-3 py-4 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Location here eg. Accra Mall"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Return Date
                </label>
                <input
                  type="date"
                  required
                  className="appearance-none mt-3 relative block w-full px-3 py-4 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Location here eg. Accra Mall"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Pickup Time
                </label>
                <input
                  type="time"
                  required
                  className="appearance-none mt-3 relative block w-full px-3 py-4 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Location here eg. Accra Mall"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="">
                  Return Time
                </label>
                <input
                  type="time"
                  required
                  className="appearance-none mt-3 relative block w-full px-3 py-4 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Location here eg. Accra Mall"
                />
              </div>
            </div>
            <hr />

            <div class="flex justify-center">
              {userData?.userToken ? (
                <Fragment>
                  <button type="submit" className={"btn"}>
                    Rent Now
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <span className={"my-5 text-blue-400"}>
                    Please login before you make a request to rent this car
                  </span>
                </Fragment>
              )}
            </div>
          </form>
        </section>

        <div className={"small-container "}>
          <div
            className={
              "w-full flex flex-row justify-between items-center my-10"
            }
          >
            <div>
              <h2 className={"text-2xl font-medium"}>Featured Vehicles</h2>
            </div>
            <div>
              <a
                href={"/cars"}
                className={"text-gray-600 hover:text-yellow-600"}
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div class="small-container">
          <div class="row">
            {loadCars ? (
              <Fragment>loading cars ...</Fragment>
            ) : (
              <Fragment>
                {cars?.cars?.map((car, i) => (
                  <Fragment key={i}>
                    <div class="col-4">
                      <a href={`/car/${car?._id}`}>
                        <img src={car?.images?.[0]} />
                        <h4>
                          {car?.make} {car?.model}
                        </h4>
                      </a>
                      <a href={`/car/${car?._id}`} class="add-cart">
                        <button type="button" name="cart" class="btn">
                          View Car
                        </button>
                      </a>
                    </div>
                  </Fragment>
                ))}
              </Fragment>
            )}
          </div>
        </div>

        <Footer />
      </Fragment>
    </Fragment>
  );
};

export default withApollo({ ssr: true })(Car);
