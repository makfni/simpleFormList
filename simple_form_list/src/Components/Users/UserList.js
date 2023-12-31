import React from "react";
import Card from "../UI/Card";
import classes from "../Styles/UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
      {props.list.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
