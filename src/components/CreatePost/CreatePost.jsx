import React, {useState} from "react";

const CreatePost = (props) =>{
    const [name, setName] = useState("")
    const [post, setPost] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        }
        console.log(newPost)
        props.createNewPost(newPost)
    }
  

return(
    <form onSubmit={handleSubmit}>
        <div>
            <label>name</label>
            <input type="text" name="name" value={name} onChange={(event)=> setName(event.target.value)}/>
        </div>
        <div>
            <label>post</label>
            <input type="text" name="post" value={post} onChange={(event)=> setPost(event.target.value)}/>
        </div>
        <div>
            <button type="submit">Create</button>
        </div>
    </form>

)
}

export default CreatePost
