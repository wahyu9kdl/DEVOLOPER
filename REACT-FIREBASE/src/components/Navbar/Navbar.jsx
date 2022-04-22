import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">CRUD App</Link>
      </div>
      <div className={classes.links}>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </div>
  );
};

export default Navbar;
