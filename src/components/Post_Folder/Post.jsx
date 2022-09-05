import React, {useState, useEffect} from "react";


const Post = ({name, postBody})=>{
    return(
<div>
    <h1>{name}</h1><br></br>
    <p>{post}</p><br></br>
    <button>thumbsup</button><button>thumbsdown</button>
</div>
    )
}

export default Post;