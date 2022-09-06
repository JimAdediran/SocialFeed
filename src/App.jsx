import React, {useState} from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/CreatePost/CreatePost"
import NavBar from "./components/NavBar/NavBar"
import Post from "./components/Post_Folder/Post";


function App() {
  const [posts, setPosts] = useState([{name: "", post: ""}])

  function addNewPost(post){
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }
  return(
  <div>
    <h1> <NavBar /> </h1>
    <div><CreatePost createNewPost={addNewPost} /></div>
    <div><DisplayPosts posts={posts} /></div>
    </div>
    

  )
}


  export default App;
