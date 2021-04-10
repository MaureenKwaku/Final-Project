import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/footer";
import Header from "../../components/headerForProduct";

const Car = () => {
  return (
    <Fragment>
      <Head>
        <title>Car | Rent-A-Ride Rental Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fragment>
        <Header />

        <div class="small-container single-product">
          <div class="row">
            <div class="col-2">
              <img src="/images/2019-mercedes-benz-sprinter.jpg" width="100%" />
            </div>
            <div class="col-2">
              <p>
                <a href="/cars" style={{ color: "rgb(233, 174, 64)" }}>
                  Home
                </a>
                / Van
              </p>
              <h3 className="font-bold text-3xl text-gray-700 my-5">
                2019 Mercedes Sprinter
              </h3>
              <h3 className={"font-medium"}>GH&cent; 50 per hour</h3>

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
              <p className={"font-light text-sm -ml-1"}>GH-2323</p>

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
              <p className={"font-light text-sm -ml-1"}>2323</p>

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
              <p className={"font-light text-sm -ml-1"}>2323</p>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                illo perspiciatis deserunt aliquam quis. Placeat vel nobis
                fugit, vero numquam nam quos reiciendis cupiditate enim. Illo
                perspiciatis pariatur dolorum totam.
              </p>

              <a href="/book/1" class="btn">
                Rent
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    </Fragment>
  );
};

export default Car;
