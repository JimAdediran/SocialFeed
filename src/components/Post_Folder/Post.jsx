import React from "react";


const Post = (props)=>{
    return(
<div>
    <div>{props.name}</div>
    <div>{props.post}</div>
    <button type="submit">thumbsup</button> <button type="submit">thumbdown</button>
</div>
    )
}

export default Post;