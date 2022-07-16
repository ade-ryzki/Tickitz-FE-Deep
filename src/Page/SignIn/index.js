import React from "react";
import logo from "../../img/tickitz-white.svg";
import "../../css/style.css";
import { Link } from "react-router-dom";



function SignIn() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-none d-md-block image-container"style={{
              backgroundImage: `linear-gradient(rgba(43, 21, 107, 0.8), rgba(43, 21, 107, 0.8)), url(./img/image-bg.jpg)`,
            }}>
            <div className="title-sign-in">
              <img src={logo} alt="logo" />
              <h1>wait, watch, wow!</h1>
            </div>
          </div>
          <div className="col-md-6 form-container-sign-in">
            <form className="form-box" action="index.html">
              <div className="mb-4">
                <h3>Sign In</h3>
                <p>
                  Sign in with your data that you entered during your
                  registration
                </p>
              </div>
              <div className="mb-3 form-input">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Write your email"
                />
              </div>
              <div className="mb-4 form-input">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Write your password"
                />
              </div>
              <button type="submit" className="btn btn-join-now py-3 mb-4">
                Sign In
              </button>
              <div className="text-center link mb-4">
                Forgot your password?
                <a href="forgot_password.html">Reset now</a>
              </div>
              <h6>
                <span>Or</span>
              </h6>
              {/* Mobile */}
              <div className="d-sm-block d-md-none">
                <div className="d-flex justify-content-between mt-4">
                  <Link to="" className="btn btn-login-external py-3">
                    <img src="./icon/ic-google.png" alt="Google" />
                  </Link>
                  <Link to="" className="btn btn-login-external py-3">
                    <img src="./icon/ic-facebook.png" alt="fb" />
                  </Link>
                </div>
              </div>
              {/* Desktop */}
              <div className="d-none d-md-block">
                <div className="d-flex justify-content-between mt-4">
                  <Link to='' className="btn btn-login-external py-3">
                    <img src="./icon/ic-google.png" alt="Google" />Google
                  </Link>
                  <Link to='' className="btn btn-login-external py-3">
                    <img src="./icon/ic-facebook.png" alt="fb" />
                    Facebook
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
