import React from "react";
import CustomButton from "../Button/Button"
import "./Post.css"

const Post = (props)=>{
    return(
<div>
    <div>{props.name}</div>
    <div className="post">{props.post}</div>
    <div>{props.date}</div>
    <CustomButton />
</div>
    )
}

export default Post;