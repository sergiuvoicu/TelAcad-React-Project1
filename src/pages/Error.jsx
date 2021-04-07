import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return(
        <div>
            <div className = 'header'>
                <h1 className = 'h1'> ERROR 400: BAD REQUEST</h1>
                <div style= {{ alignItems: 'right'}}>
                    <Link className = 'link' to = '/'> HOME </Link>
                    <Link className = 'link' to = '/about'> ABOUT </Link>
                </div>
            </div>
                <p className = 'about-p'> There's nothing here. </p>

        </div>
    )
}

export default Error;