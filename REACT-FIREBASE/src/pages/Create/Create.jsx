import React, { useState } from "react";
import classes from "./Create.module.css";
import Form from "../../components/Form/Form";
import { db } from "../../firebase.config";
import { ref, set } from "firebase/database";
import { v4 as uuid4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  mobile: "",
};
const Create = () => {
  const [credential, setCredential] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createData(credential);
  };

  // Create data
  const createData = async (data) => {
    try {
      const docRef = ref(db, "contacts/" + uuid4());
      await set(docRef, data);
      toast.success("Data successfully created");
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
        title="Create Info"
        type="Create"
        data={credential}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Create;
