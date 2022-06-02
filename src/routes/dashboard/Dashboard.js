import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div>Dashboard</div>

      <Link to="/">go to homepage</Link>
    </>
  );
}

export default Dashboard;
