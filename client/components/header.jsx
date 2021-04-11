import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div class="topnav" id="myTopnav">
          <div class="logo">
            <img
              src="/images/Hand_Holding_Key-512.webp"
              width="90px"
              height="70px"
            />
          </div>
          <a href="/login">Login/Register</a>
          <a href="/about-us">About</a>
          <div class="dropdown">
            <button class="dropbtn">
              Contact Us
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="mailto:seyramablakwaku@gmail.com">E-mail Us</a>
              <a href="tel:+233200732551">Call Us</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="/cars">Booking</a>
            <a href="/" class="active">
              Home
            </a>
            <a
              href="javascript:void(0);"
              style={{ fontSize: "15px" }}
              class="icon"
              onclick="myFunction()"
            >
              &#9776;
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;