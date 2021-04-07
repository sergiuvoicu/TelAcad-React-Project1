import React from 'react';
import trash from '../assets/trash.png';
import star from '../assets/star-on.png';

function UserItem(props){
    return(
        
        <div className = 'profile'>
            
            <img className = 'avatar' src = {props.image} alt = ""/>
            
            <div className = 'info-block'>
                
                <p className = 'info-p'> 
                { props.isGoldClient === true ? <img className = 'icon' src = {star} alt = ''/> : null} {props.name}</p>
                <p className = 'info-p'>{props.email}</p>
                <p className = 'info-p'>{props.salary}</p>
                <button className = 'trash-btn' type = 'submit' id = {props.name} onClick = {event =>{    
                            event.preventDefault(); 
                            props.deleteHandler();}
                            }> <img className = 'icon' src = {trash} alt = ''/> </button>
            </div>
        </div>
        
    )
}

export default UserItem;