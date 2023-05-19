import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div className="">{props.post.body}</div>
            </div>
            <div className="post_btns">
                <button>Delete</button>
            </div>
        </div>
    )
}

export default PostItem