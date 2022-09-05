import React, {useState, useEffect} from "react";

const Post = (props) =>{
    return(
<div>
<form action="" method="post">
    <label for="name">Name </label>
    <input type="text" name="name"></input><br></br>
    <label for="post">Post </label>
    <input type="text" name="post"></input>
    <button>Create</button>
</form>
</div>
    )
};

export default Post;