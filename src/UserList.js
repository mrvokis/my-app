import React from 'react';
import User from './User';
const UserList = () => {
    const users = [
        {id:1,name:'John', email:'john@example.com'},
        {id:2,name:'Bob', email:'bob@example.com'},
        {id:3,name:'Alex', email:'alex@example.com'}
    ];
    return (
        <div>
            <h1>Users List</h1>
            {users.map((user, index)=> {
                return(<User id={user.id} name={user.name} email={user.email} />)
            })}
        </div>
    )
}
export default UserList;