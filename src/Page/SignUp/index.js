import React from "react";
// import iron from "../../img/Iron.jpg";
import '././index.css';

function SignUp() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-none d-md-block image-container">
            <div className="title-register">
              <img src="./assets/images/tickitz-white.svg" alt="" />
              <h1>Lets build your account</h1>
              <p>
                To be a loyal moviegoer and access all of features, your details
                are required
              </p>
              <div className="custom-progress">
                <ul>
                  <li>
                    <span className="active">1</span>
                    <div className="progres">Fill your additional details</div>
                  </li>
                  <li>
                    <span>2</span>
                    <div className="progres">Active your account</div>
                  </li>
                  <li>
                    <span>3</span>
                    <div className="progres">Done</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 form-container-register">
            <form className="form-box" action="sign_in.html">
              <div className="mb-4">
                <h3>Fill your additional details</h3>
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
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to terms &amp; conditions
                </label>
              </div>
              <button type="submit" className="btn btn-join-now py-3 mb-4">
                Join for free now
              </button>
              <div className="text-center link mb-4">
                Do you already have an account?
                <a href="sign_in.html">Log In</a>
              </div>
              <h6>
                <span>Or</span>
              </h6>
              {/* Mobile */}
              <div className="d-sm-block d-md-none">
                <div className="d-flex justify-content-between mt-4">
                  <a href className="btn btn-login-external py-3">
                    <img src="./assets/icon/ic-google.png" alt="" />
                  </a>
                  <a href className="btn btn-login-external py-3">
                    <img src="./assets/icon/ic-facebook.png" />
                  </a>
                </div>
              </div>
              {/* Desktop */}
              <div className="d-none d-md-block">
                <div className="d-flex justify-content-between mt-4">
                  <a href className="btn btn-login-external py-3">
                    <img src="./assets/icon/ic-google.png" alt="" /> Google
                  </a>
                  <a href className="btn btn-login-external py-3">
                    <img src="./assets/icon/ic-facebook.png" />
                    Facebook
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
