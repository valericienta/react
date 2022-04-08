import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUserList] = useState([]);

  const AddUserHandler = (uName, uAge) => {

    setUserList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random() }]
    })

  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
