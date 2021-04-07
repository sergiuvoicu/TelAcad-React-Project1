import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {

    return(
        props.posts.map((post) => {return(
            <PostItem userId = {post.userId}
                    title = {post.title}
                    body = {post.body}
                    key = {post.id}/>
        )}) 
    )

}

export default PostList;