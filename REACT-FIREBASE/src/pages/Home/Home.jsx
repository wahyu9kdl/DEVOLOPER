import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { db } from "../../firebase.config";
import { onValue, ref, remove } from "firebase/database";
import Table from "../../components/Table/Table";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    onValue(ref(db, "contacts"), (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const handleDelete = (e) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const id = e.target.value;
      deleteData(id);
    }
  };

  // Delete data
  const deleteData = async (id) => {
    try {
      await remove(ref(db, "contacts/" + id));
      toast.success("Data successfully deleted");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className={classes.dataContainer}>
      <h3>Users List</h3>
      <div className={classes.responsive}>
        {Object.entries(data).length !== 0 && (
          <Table data={data} handleDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default Home;
