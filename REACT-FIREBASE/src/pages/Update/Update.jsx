import React, { useEffect, useState } from "react";
import classes from "./Update.module.css";
import Form from "../../components/Form/Form";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase.config";
import { ref, update, onValue } from "firebase/database";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  email: "",
  mobile: "",
};

const Update = () => {
  const [credential, setCredential] = useState(initialState);

  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  useEffect(() => {
    onValue(ref(db, "contacts"), (snapshot) => {
      if (snapshot.val() !== null) {
        setCredential({ ...snapshot.val()[id] });
      } else {
        setCredential(initialState);
      }
    });

    return () => {
      setCredential(initialState);
    };
  }, [id]);

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(credential, id);
  };

  // Update data
  const updateData = async (data, id) => {
    try {
      const docRef = ref(db, "contacts/" + id);
      await update(docRef, data);
      toast.success("Data successfully updated");
      setCredential(initialState);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className={classes.formContainer}>
      <Form
        title="Update Info"
        type="Update"
        data={credential}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Update;
