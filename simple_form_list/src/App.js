import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const addItemHandler = (uName, uAge) => {
    setUserList((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser populate={addItemHandler} />
      <UserList list={userList} />
    </div>
  );
}

export default App;
