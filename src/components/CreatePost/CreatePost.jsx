import React, {useState, useEffect} from "react";

const CreatePost = (props) =>{
    const [name, setName] = useState()
    const [post, setPost] = useState()

    function handleSubmit(event){
        event.preventDefault();
        let createdPost = {
            name: name,
            post: post
        }
    }
    addCreat4edPost(createdPost)
    return
}

return(
    <form onSubmit={handleSubmit}>
        <div>
            <label>name</label>
            <input value={name} onChange={(event)=> setName(event.target.value)}/>
        </div>
        <div>
            <label>post</label>
            <input value={name} onChange={(event)=> setName(event.target.value)}/>
        </div>
        <div>
            <button type="submit">Create</button>
        </div>
    </form>

)

