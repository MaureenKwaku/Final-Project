import { useQuery } from "@apollo/client";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { withApollo } from "../lib/apollo";
import { GET_CARS } from "../lib/graphql/queries";

function Home() {
  const { data, loading } = useQuery(GET_CARS, {
    variables: {
      limit: 9,
      filter: { featured: true, status: "Available" },
    },
  });

  return (
    <Fragment>
      <Head>
        <title>Home | Rent-A-Ride Rental Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fragment>
        <Header />

        <section class="main">
          <h1 className={"text-5xl font-bold"}>Rent-A-Ride Rental Service</h1>
          <h3 className={"text-3xl mt-2 mb-10"}>
            Find the best luxury and low cost vehicular rentals here
          </h3>
          <p className={"font-light text-lg mt-10"}>
            We offer several types and brandes of car for rents.
          </p>

          <div class="categories" id="category">
            <div class="small-container">
              <button onClick={() => (location.href = "/cars")}>
                Book Car
              </button>
            </div>
          </div>
        </section>

        {/* featured cars */}

        <div class="categories" id="category">
          <div class="small-container">
            <h2 class="title text-4xl font-bold">Featured Vehicles</h2>
            {loading ? (
              <Fragment>
                <div className={"row"}>loading cars ....</div>
              </Fragment>
            ) : (
              <Fragment>
                <div class="row">
                  {data?.cars?.map((car, i) => (
                    <Fragment key={i}>
                      <div
                        onClick={() => {
                          location.href = `/car/${car?._id}`;
                        }}
                        class="col-4 cursor-pointer"
                      >
                        <img src={car?.images?.[0]} />
                        <h4 className={"mt-1 text-gray-600"}>
                          {car?.make} {car?.model}
                        </h4>
                      </div>
                    </Fragment>
                  ))}
                </div>

                <a
                  href={"/cars"}
                  className={
                    "flex flex-row items-center text-yellow-400 hover:text-yellow-800"
                  }
                >
                  <span
                    className={
                      " flex flex-row items-center text-yellow-400 hover:text-yellow-800"
                    }
                  >
                    All Products{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </Fragment>
            )}
          </div>
        </div>

        <div class="offer">
          <div class="small-container">
            <div class="row">
              <div class="col-2">
                <img src="/images/unnamed.png" class="offer-img" />
              </div>
              <div class="col-2">
                <p> Exclusively Available at Rent-A-Ride Rentals</p>
                <h1 className={"font-bold"}>Discount of 30%</h1>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora id quis ad doloremque ipsa veniam, eius sunt molestiae
                  quam autem tempore ex ut recusandae nam corrupti distinctio
                  illo, cum ratione!
                </small>{" "}
                <br />
                <a href="/cars" class="btn ">
                  <div className={"flex flex-row items-center"}>
                    <div>Rent now</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="categories" id="category">
          <div class="small-container">
            <h2 class="title text-4xl font-bold"> Why Choose Us</h2>
            <div class="row">
              <div class="col-3">
                <p>
                  <div
                    className={
                      "w-full text-white flex justify-center items-center"
                    }
                  >
                    <svg
                      height={50}
                      style={{ color: "#fff" }}
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 01-.91-5.68 15.93 15.93 0 004.53-12.53A16.27 16.27 0 00447.65 176h-15.6a17 17 0 00-2 .13 8.5 8.5 0 00-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 00-1.35.34 17 17 0 00-2-.13H64.35A16.27 16.27 0 0048 190.77a15.93 15.93 0 004.59 12.47 3.6 3.6 0 01-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0013.2 10.87v.2a16 16 0 0016 16h56a16 16 0 0016-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0128-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0128.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0016 16h56a16 16 0 0016-16v-.12A16 16 0 00485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 01-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 01-7.44-11.42c.35-.74.72-1.49 1.05-2.24zm11.93 79.63A427.17 427.17 0 0172.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 01-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 01-.49 14.48z" />
                    </svg>
                  </div>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quos tempora esse sed id. Obcaecati omnis voluptas
                  laboriosam, molestiae sed nesciunt dolores cupiditate natus
                  perspiciatis, tempora corporis quae doloribus corrupti.
                </p>
              </div>
              <div class="col-3">
                <p>
                  <div className={"w-full flex justify-center items-center"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  dolorum, amet praesentium incidunt iusto corporis, eum nobis
                  omnis voluptas explicabo totam sequi illum, quisquam qui
                  veniam perspiciatis velit fuga nemo?
                </p>
              </div>
              <div class="col-3">
                <p>
                  <div className={"w-full flex justify-center items-center"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente libero reiciendis natus odit? Animi deserunt soluta
                  fuga, distinctio optio culpa reiciendis, hic facilis
                  recusandae debitis magnam nihil provident maxime officia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial">
          <div class="small-container">
            <h2 class="title text-4xl font-bold">Leave Your Feedback</h2>

            <div class="comment-box">
              <form action="#">
                <input
                  type="text"
                  name="full-name"
                  placeholder="Enter Full Name"
                />
                <input type="text" name="email" placeholder="E-mail Address" />
                <textarea
                  name="comments"
                  className={"border border-gray-600"}
                  placeholder="Type Your Comment"
                ></textarea>
                <button
                  type="submit"
                  class="btn"
                  style={{ background: "rgb(233, 174, 64)" }}
                >
                  Submit Comment
                </button>
              </form>
            </div>

            <div class="row">
              <div class="col-7">
                <i class="fa fa-quote-left"></i>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, deserunt molestiae eligendi assumenda excepturi,
                  accusantium modi a quos ad, quo iste. Dolores veritatis
                  provident unde necessitatibus sint dolore fugit neque.
                </p>
                <div className={"w-full flex flex-col items-center"}>
                  <div class="rating flex flex-row items-center">
                    {[1, 2, 3, 4, 5].map(() => (
                      <Fragment>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </Fragment>
                    ))}
                  </div>
                  <img src="/images/user-1.png" />
                  <h3> Alex Parker</h3>
                </div>
              </div>
              <div class="col-7">
                <i class="fa fa-quote-left"></i>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, deserunt molestiae eligendi assumenda excepturi,
                  accusantium modi a quos ad, quo iste. Dolores veritatis
                  provident unde necessitatibus sint dolore fugit neque.
                </p>
                <div className={"w-full flex flex-col items-center"}>
                  <div class="rating flex flex-row items-center">
                    {[1, 2, 3, 4, 5].map(() => (
                      <Fragment>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </Fragment>
                    ))}
                  </div>
                  <img src="/images/user-2.png" />
                  <h3> Carlos Rodriguez</h3>
                </div>
              </div>
              <div class="col-7">
                <i class="fa fa-quote-left"></i>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, deserunt molestiae eligendi assumenda excepturi,
                  accusantium modi a quos ad, quo iste. Dolores veritatis
                  provident unde necessitatibus sint dolore fugit neque.
                </p>
                <div className={"w-full flex flex-col items-center"}>
                  <div class="rating flex flex-row items-center">
                    {[1, 2, 3, 4, 5].map(() => (
                      <Fragment>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </Fragment>
                    ))}
                  </div>
                  <img src="/images/user-3.png" />
                  <h3> Asta Flores</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63530.15644903886!2d-0.13010588106652027!3d5.620819476927571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0xfdf8440c2c8021d%3A0x7d94b9ac6149ac75!2sDandinas%20Preparatory%20School%2C%20Accra!3m2!1d5.620817799999999!2d-0.0950919!4m0!5e0!3m2!1sen!2sgh!4v1615680373933!5m2!1sen!2sgh"
          width="100%"
          height="450"
          style={{ border: 0, marginBottom: "-7px" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <Footer />
      </Fragment>
    </Fragment>
  );
}

export default withApollo({ ssr: true })(Home);
