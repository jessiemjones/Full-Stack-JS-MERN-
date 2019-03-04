import React from 'react';


const BlogPost = (props) => {
    return (
        console.log(props),
        <div className="blogPost">
            <h2>{props.blogs.title}</h2>
            <h3>{props.blogs.subtitle}</h3>
            <p>{props.blogs.author} {props.blogs.date}</p>
        </div>
    )
}

export default BlogPost;