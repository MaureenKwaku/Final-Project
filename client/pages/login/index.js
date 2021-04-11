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
                <div class="imageBox">
                  <img
                    src="/images/car-rental2.jpg"
                    alt=""
                    style={{ backgroundPosition: "right" }}
                  />
                </div>
                <div class="formBox">
                  <form action="">
                    <h2> Log In </h2>
                    <input type="email" placeholder="Enter E-mail" id="email" />
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      required
                    />
                    <input type="submit" class="submit" value="Login" />
                    <p class="register">
                      {" "}
                      <b>don't have an account ?</b>
                      <a href="/register" onclick="javascript:doToggle();">
                        {" "}
                        Register{" "}
                      </a>
                    </p>
                    <p class="forgot">
                      <a href="#"> forgot password?</a>
                    </p>
                  </form>
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
