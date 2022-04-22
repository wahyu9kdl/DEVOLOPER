import React from "react";
import classes from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default Layout;
