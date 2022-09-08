import React, {useState} from "react";
import "./CreatePost.css"

const CreatePost = (props) =>{
    const [name, setName] = useState("")
    const [post, setPost] = useState("")
    const [date, setDate] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
            date: date,
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
            <input type="text" className="inputBoxPost"  name="post" value={post} onChange={(event)=> setPost(event.target.value)}/>
        </div>
        <div>
            <label>date</label>
            <input type="date" name="date" value={date} onChange={(event)=> setDate(event.target.value)}/>
        </div>
        <div>
            <button type="submit">Create</button>
        </div>
    </form>

)
}

export default CreatePost
