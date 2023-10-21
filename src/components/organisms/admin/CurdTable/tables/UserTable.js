import React from "react";
import { Table } from "react-bootstrap";
import "./custom.css";

import editicon from "./edit.png";
import trashicon from "./trash.png";

const UserTable = props => (
  <Table striped bordered hover responsive size="md">
    <thead>
      <tr>
        <th>User Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.iduser}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.email}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="edit"
              >
                <img src={editicon} />
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="delete"
              >
                <img src={trashicon} />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5} className="text-center">
            No users
          </td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default UserTable;
