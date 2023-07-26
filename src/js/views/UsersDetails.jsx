import React from "react";
import { useParams } from "react-router-dom";


export const UsersDetails = () => {

    const param = useParams();
    const id = param.id - 1;
    const user = JSON.parse(localStorage.getItem("usersLocal"))

    return (
        <div className="card">
            <div className="card">
                <h5>{user[id].name}</h5>
                <p className="card-text">{user[id].company.name}</p>
                <p className="card-text">{user[id].email}</p>
                <p className="card-text">{user[id].website}</p>
                <p className="card-text">{user[id].phone}</p>
                <p className="card-text">{user[id].username}</p>
                <p className="card-text">{user[id].address.city}, zipe code: {user[id].address.zipcode} </p>
               
            </div>
        </div>
        
    );
}