import React from "react";
import Post from "../Post_Folder/Post";

const DisplayPosts = (props) => {
    let feedPost = props.posts.map((post) => {
        return (
          <div>
            <Post  name={post.name} post={post.post} date={post.date} />
            <hr/>
          </div>
        );
      });
      return <div>{feedPost}</div>;
    };
    
  
    
export default DisplayPosts