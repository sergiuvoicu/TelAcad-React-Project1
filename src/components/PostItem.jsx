import React from 'react';

const PostItem = (props) => {
    return(

        <div className = 'info-list'>
            <p>{props.userId}</p>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    )
}

export default PostItem;