import {useEffect, useState} from "react";

function Users (props){
const[users, setUsers] = useState([])

useEffect(()=> {
    const usersData = [
        {
            id: 1,
            name: "Nguyễn Văn Bá",
            email:'nguyenvanba@gmail.com',
            password:'123',
            age: 20,
            address:"DA NANG",
            gender: true,
        }
    ]
})

}