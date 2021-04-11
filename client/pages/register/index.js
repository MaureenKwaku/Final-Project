import { Fragment } from "react";
import Head from "next/head";
import Footer from "../../components/footer";
import Header from "../../components/headerForProduct";

const Login = () => {
  return (
    <Fragment>
      <Head>
        <title>Login | Rent-A-Ride Rental Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fragment>
        <div className={"bg-yellow-400"}>
          <Header />

          <section className={"sectionLogin"}>
            <div class="mainLogin">
              <div class="user SignIn">
                <div class="formBox">
                  <form action="">
                    <h2> Create Account </h2>
                    <input type="text" placeholder="Full Name" id="Name" />
                    <input type="text" placeholder="Username" id="Username" />
                    <input type="email" placeholder="E-mail" id="RegEmail" />
                    <input
                      type="password"
                      placeholder="Create Password"
                      id="RegPass"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      id="RegConPass"
                      required
                    />
                    <input type="submit" class="submit" value="Register" />
                    <p class="register">
                      {" "}
                      <b>Already have an Account ?</b>
                      <a href="/login" onclick="javascript:doToggle();">
                        {" "}
                        Log In{" "}
                      </a>
                    </p>
                  </form>
                </div>
                <div class="imageBox">
                  <img
                    src="/images/car-rental3.jpg"
                    alt=""
                    // style={{ backgroundPosition: "10% " }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    </Fragment>
  );
};

export default Login;
