import React from "react";
import classes from "./Form.module.css";

const Form = ({ title, type, data, handleChange, handleSubmit }) => {
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <label htmlFor="username">Enter username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Enter your username"
        autoComplete="off"
        spellCheck="false"
        required
        value={data ? data.username : ""}
        onChange={handleChange}
      />
      <label htmlFor="email">Enter email</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Enter your email address"
        autoComplete="off"
        spellCheck="false"
        required
        value={data ? data.email : ""}
        onChange={handleChange}
      />
      <label htmlFor="mobile">Enter mobile number</label>
      <input
        id="mobile"
        type="text"
        name="mobile"
        placeholder="Enter your mobile number"
        autoComplete="off"
        spellCheck="false"
        required
        value={data ? data.mobile : ""}
        onChange={handleChange}
      />
      <input type="submit" value={type} />
    </form>
  );
};

export default Form;
