import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Cars = () => {
  return (
    <Fragment>
      <Head>
        <title>Cars | Rent-A-Ride Rental Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <Header />

        <section class="mainCar">
          <h1 className={"text-white font-bold text-5xl"}>
            Find The Right Car For You
          </h1>

          <div className={"mt-10"}>
            <div class="small-container">
              <p className={"font-light"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                doloribus quasi incidunt quas quisquam itaque nemo aut quia ut
                dolorem aliquid magni provident repellendus, dicta ipsa modi,
                animi sed! A!
              </p>
            </div>
          </div>
        </section>

        <section>
          <div class="my-20">
            <div class="small-container">
              <h2 class="title text-4xl font-semibold">Available Vehicles</h2>
              <div class="row">
                <div class="col-md-4 text-center">
                  <ul id="filter-list">
                    <li class="list active" data-filter="all">
                      ALL
                    </li>
                    <li class="list" data-filter="sedan">
                      SEDAN
                    </li>
                    <li class="list" data-filter="coupe">
                      COUPE
                    </li>
                    <li class="list" data-filter="suv">
                      SUV
                    </li>
                    <li class="list" data-filter="van">
                      VAN
                    </li>
                  </ul>
                </div>

                <div class="product">
                  <div class="itembox van">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox sedan">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />{" "}
                    </a>
                  </div>
                  <div class="itembox suv">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox van">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox sedan">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox suv">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox coupe">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox sedan">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox sedan">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox sedan">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox sedan">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                  <div class="itembox suv">
                    <a href="/car/1">
                      <img src="/images/2019-mercedes-benz-sprinter.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Fragment>
    </Fragment>
  );
};

export default Cars;
