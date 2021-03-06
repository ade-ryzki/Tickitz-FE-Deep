import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-none d-lg-block">
            <div className="card shadow card-2">
              <div className="card-body align-self-center text-center my-3">
                <h3 className="fw-bold mb-5">ADMIN</h3>
                <Link
                  to={"/admin/movie"}
                  className="text-black text-decoration-none"
                >
                  Movie
                </Link>
                <hr />
                <Link to={"/"} className="text-black text-decoration-none">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
