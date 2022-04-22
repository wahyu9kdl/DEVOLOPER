import React from "react";
import classes from "./Table.module.css";
import { Link } from "react-router-dom";

const Table = ({ data, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((item, index) => (
          <tr key={Math.random()}>
            <td>{index + 1}</td>
            <td>{data[item].username}</td>
            <td>{data[item].email}</td>
            <td>{data[item].mobile}</td>
            <td className={classes.actions}>
              <Link className={classes.updateBtn} to={`/update/${item}`}>
                Update
              </Link>
              <button
                className={classes.deleteBtn}
                value={item}
                onClick={handleDelete}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
