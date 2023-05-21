import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number}. {props.post.title}</strong>
                <div className="">{props.post.body}</div>
            </div>
            <div className="post_btns">
                <MyButton>Delete</MyButton >
            </div>
        </div>
    )
}

export default PostItem