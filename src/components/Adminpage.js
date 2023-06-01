import React from "react";
import Navbar from "./Navbar";
import "./Admin.css";
import { Link } from "react-router-dom";

function Adminpage() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="pageadd">
          <h1 className="adtitle">Welcome To The Admin Space</h1>
          <div className="butlistad">
          <Link to="/Adoptf">
              <button className="but10">Adopt Form</button>
            </Link>
            <Link to="/Usersall">
              <button className="but10">Users Accounts</button>
            </Link>
            <Link to="/Form">
              <button className="but10">Comments</button>
            </Link>
            <Link to="/Product">
              <button className="but10">Product List</button>
            </Link>
            <Link to="/Animal">
              <button className="but10">Animals List</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adminpage;
