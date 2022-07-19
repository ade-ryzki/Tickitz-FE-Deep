import React from "react";
import NavbarLogin from "../../../../Component/NavbarLogin";
import { Sidebar } from "../../Component/Sidebar";
import MetaTags from "./../../Component/Metatags";

export const DashboardAdmin = () => {
  return (
    <>
      <MetaTags title="Tickitz - Dashboard Admin" />
      <NavbarLogin />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </>
  );
};
