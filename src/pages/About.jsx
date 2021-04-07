import React from 'react';
import {Link} from 'react-router-dom';
const About = () => {
    return(
        <div>
            <div className = 'header'>
                <h1 className = 'h1'> ABOUT </h1>
                <Link className = 'link' to = '/'> HOME </Link>
            </div>
            <p className = 'about-p'> This project consists of a user registration form, two buttons which change the text color and the background color,
                two buttons which toggle between a list of users and a list of posts. By submitting the user registration form, or by 
                deleting an user, the user list updates instantly. The application is mobile responsive, and it was developed using all
                React fundamental concepts. </p>
        </div>
    )
}

export default About;