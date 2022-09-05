import React, {useState, useEffect} from "react";
import Post from "../Post_Folder/Post";

const DisplayPosts = (props) => {
    return(
        <table class = "table">
            <tbody>
                {props.posts.map((el)=>{
                    return(
                        <Post name = {el.name} post = {el.post}/>
                    )
                })}
            </tbody>  
        </table>
    )

}

export default DisplayPosts