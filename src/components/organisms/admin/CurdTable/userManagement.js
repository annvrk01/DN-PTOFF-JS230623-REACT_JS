import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import { Table, Card } from "react-bootstrap";
import Authen from "../../../../util/Authen";
import { useEffect } from "react";
import { s } from "../../../../util/utils";
import NavBarHome from "../../../molecules/navbar/navbar";

const initialFormState = {
  id: null,
  username: "",
  firstname: "",
  lastname: "",
  email: ""
};

export default function UserManagement() {
  // Setting state
  const [searchKey, setSearchKey] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("username");

  const [pageSize, setPageSize] = useState(Authen.DEFAULT_PAGE_SIZE);
  const [pageCount, setPageCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const handleGetUser = (responseData) => {
    let users = responseData.content;
    //console.log("got users:", users);

    let fillCountToMatchPageSize = pageSize - users.length;
    while(fillCountToMatchPageSize > 0){
      users.push({});
      fillCountToMatchPageSize--;
    }    
    setUsers(users);

    let pageCount = responseData.totalPages;
    //console.log("pageCount = ", pageCount);
    setPageCount(pageCount);
  }   

  const handleNewPageIndex = (newPageIndex) => {
    setPageIndex(newPageIndex);
  }
  const pagingUser = () => {
    Authen.getUserPaging(      
      searchKey,
      pageIndex, 
      pageSize, 
      sortOrder, 
      sortBy
    )
    .then(
      (responseData) => {
        handleGetUser(responseData);
      }
    );
  }

  useEffect(
    () => {
      pagingUser();
    }, [searchKey, pageIndex, pageSize, sortOrder, sortBy]);
    


  const addUser = user => {
    user.id = users.length + 1;
    Authen.addUser(user).then(
      (user) => {        
        setUsers([...users, user]);
        pagingUser();
      }
    )
  };

  const deleteUser = id => {
    setEditing(false);

    Authen.deleteUser(id).then(
      (response) => {   
        //setUsers(users.filter(user => user.id !== id));
        pagingUser();
      }
    )
  };

  const updateUser = (id, user) => {
    setEditing(false);

    Authen.updateUser(user).then(
      (response) => {   
        let foundUserAt = users.findIndex( user => user.id === response.data.id );   
        console.log("UPDATE USER SUCCEED, update at index " + foundUserAt)
        users[foundUserAt] = response.data;  
        setUsers([...users]);
      }
    )
  };

  const editRow = user => {
    setEditing(true);

    setSelectedUser({
      id: user.id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    });
  };

  return (
    <div className="container-fluid">
      
    <div className="">
      <NavBarHome></NavBarHome>
    </div>

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
                  selectedUser={selectedUser}
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
          <UserTable 
            users={users} editRow={editRow} deleteUser={deleteUser} 
            handleNewPageIndex={
              (newPageIndex) => {
                handleNewPageIndex(newPageIndex);
            }}
            pageCount={pageCount}
            pageSize={pageSize} 
            setPageSize={setPageSize}
            setSearchKey = {setSearchKey}
            setSortOrder = {setSortOrder}
            setSortBy = {setSortBy}
          />
        </div>
      </div>
    </div>
  );
};
