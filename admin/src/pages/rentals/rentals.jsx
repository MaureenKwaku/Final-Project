import * as React from "react";
import { EmptyAlert, ErrorAlert } from "../../components/alert";
import { usePagination } from "../../components/hooks";
import { DataLoader } from "../../components/loaders";
import Dataview from "./dataview";
import BreadCrumb from "../../components/breadcrumb";

const data = {
  admins: [
    {
      user: {
        name: "Domey Benjamin",
      },
      car: {
        plateNumber: "GHS2232232",
      },
      amount: "4535",
      numberOfHours: 50,
      createdAt: new Date(),
    },
  ],
  adminsLength: 1,
};
const loading = false;
const refetch = () => {};

const Admins = () => {
  React.useEffect(() => {
    document.title = "List Of Adminisitrators - Rent-A-Ride Dashboard";
  }, []);

  const { limit, setLimit, end, setEnd, skip, setSkip } = usePagination(12);

  return (
    <React.Fragment>
      <div className={"mt-5"}>
        <BreadCrumb name={"Rentals"} />
      </div>

      <div className={"mt-3 border-none"}>
        {loading ? (
          <DataLoader />
        ) : (
          <>
            {data ? (
              <>
                {data?.adminsLength === 0 ? (
                  <>
                    <div className={"mt-10"}>
                      <EmptyAlert
                        mainMessage={"No Admins"}
                        subMessage={
                          "You will see the list of admins here when they are created"
                        }
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Dataview
                        data={data?.admins}
                        refetch={refetch}
                        setLimit={setLimit}
                        limit={limit}
                        total={data?.adminsLength}
                        skip={skip}
                        setSkip={setSkip}
                        end={end}
                        setEnd={setEnd}
                      />
                    </div>
                  </>
                )}
              </>
            ) : (
              <ErrorAlert
                subMessage={""}
                buttonAvail
                buttonAction={() => {
                  refetch();
                }}
                buttonLabel={"Refresh"}
              />
            )}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Admins;
