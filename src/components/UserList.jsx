import React from 'react';
import UserItem from './UserItem';

const UserList = (props) =>{

    return(
        <div className = 'info-list'>
            {
                
                props.users.map((user,index) => { return(
                    <UserItem 
                        name = {user.name}
                        email = {user.email}
                        salary = {user.salary}
                        isGoldClient = {user.isGoldClient}
                        image = {user.image}
                        key = {index}
                        deleteHandler = {() =>{ props.deleteHandler(index); }}
                     />
                )})
            }
        </div>
    )
}

export default UserList;