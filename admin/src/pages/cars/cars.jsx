import * as React from "react";
import { EmptyAlert, ErrorAlert } from "../../components/alert";
import { usePagination } from "../../components/hooks";
import { DataLoader } from "../../components/loaders";
import Dataview from "./dataview";
import BreadCrumb from "../../components/breadcrumb";
import { useQuery } from "@apollo/client";
import { GET_CARS } from "../../services/graphql/queries";

const Cars = () => {
  React.useEffect(() => {
    document.title = "List Of Cars - Rent-A-Ride Dashboard";
  }, []);

  const { limit, setLimit, end, setEnd, skip, setSkip } = usePagination(12);

  const { data, loading, refetch } = useQuery(GET_CARS, {
    variables: {
      skip,
      limit,
    },
  });

  return (
    <React.Fragment>
      <div className={"mt-5"}>
        <BreadCrumb name={"Cars"} />
      </div>

      <div className={"mt-3 border-none"}>
        {loading ? (
          <DataLoader />
        ) : (
          <>
            {data ? (
              <>
                {data?.carsLength === 0 ? (
                  <>
                    <div className={"mt-10"}>
                      <EmptyAlert
                        mainMessage={"No Cars"}
                        subMessage={
                          "You will see the list of cars here when they get uploaded"
                        }
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Dataview
                        data={data?.cars}
                        refetch={refetch}
                        setLimit={setLimit}
                        limit={limit}
                        total={data?.carsLength}
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

export default Cars;
