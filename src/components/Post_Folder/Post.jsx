import React from "react";
import CustomButton from "../Button/Button"


const Post = (props)=>{
    return(
<div>
    <div>{props.name}</div>
    <div>{props.post}</div>
    <div>{props.date}</div>
    <CustomButton />
</div>
    )
}

export default Post;