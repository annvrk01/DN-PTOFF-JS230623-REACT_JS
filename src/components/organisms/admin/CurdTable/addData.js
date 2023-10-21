import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import { Table, Card } from "react-bootstrap";

export default function AddData() {
  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // Data
  const usersData = [
    {
      id: 1,
      iduser: "",
      fname: "Tania",
      lname: "Tania",
      email: "floppydiskette"
    },
    {
      id: 2,
      iduser: "",
      fname: "Tania",
      lname: "Tania",
      email: "floppydiskette"
    },
    {
      id: 3,
      iduser: "",
      fname: "Tania",
      lname: "Tania",
      email: "floppydiskette"
    }
  ];

  const initialFormState = {
    id: null,
    iduser: "",
    fname: "",
    lname: "",
    email: ""
  };


  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      iduser: user.iduser,
      fname: user.fname,
      lname: user.lname,
      email: user.email
    });
  };

  return (
    <div className="container-fluid">
      <h4>Add / Edit Users</h4>
      <div className="row">
        <div className="col-12 col-sm-6 mx-auto addUser">
          <Card className="">
            {editing ? (
              <Fragment>
                <h5>Edit user</h5>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h5>Add user</h5>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
          </Card>
        </div>
        <div className="col-12">
          <h5>View users</h5>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};
