import React, { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function StudentManage (props){

    const todos = useSelector(state => state.todos)
    
 useEffect(()=>{
    const students =[
        {
            id: 1,
            name:"Nguyen Van A",
            email: "nguyenvana@gmail.com",
            password: "123",
            age: 20,
            gender: true,
        },
        {
            
            id: 2,
            name:"Nguyen Van B",
            email: "nguyenvanb@gmail.com",
            password: "123",
            age: 22,
            gender: false,
        },
    ];
    setStudents(students);
 }, []);

 const handleDetailsStudent =(items) =>{
    setStudentdetails(items);
 };


 <button onclick={handleDetailsStudent(items)}>xem chi tiet</button>

}