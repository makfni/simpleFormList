import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../Styles/AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setName("");
      setAge("");
      setError({
        title: "Invalid input",
        message: "Please enter a valid name & age",
      });
      return;
    }

    if (age < 1) {
      setName("");
      setAge("");
      setError({
        title: "Invalid age",
        message: "Please enter an age greater than 0",
      });
      return;
    }

    props.populate(name, age);
    setName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          popupBtn={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">
            Username:
            <input type="text" value={name} onChange={nameChangeHandler} />
          </label>
          <label htmlFor="username">
            Age (years):
            <input type="number" value={age} onChange={ageChangeHandler} />
          </label>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
