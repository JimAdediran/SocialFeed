import React, {useState} from "react";
import "./Button.css"


const Custombutton = (props) => {
    const [likePostButton, setLikePostButton] = useState('inactive');
    const [dislikePostButton, setDislikePostButton] = useState('inactive');


    const likeHandleClick = () => {
        if (likePostButton === 'inactive') {
          setLikePostButton('likeactive');
          setDislikePostButton('inactive');
        } else {
          setLikePostButton('inactive');
        }
      };
    
      const dislikeHandleClick = () => {
        if (dislikePostButton === 'inactive') {
          setDislikePostButton('dislikeactive');
          setLikePostButton('inactive')
        } else {
          setDislikePostButton('inactive');
        }
      };
    
      return (
        <div className="button" id = "button">
        <div>
            <button className={likePostButton} onClick={likeHandleClick} name="like" id="like">Like</button>
        </div>
        <div>
        <button className={dislikePostButton} onClick={dislikeHandleClick} name="dislike" id="dislike">DisLike</button>
        </div>
        </div>
        
      );
    };
    
    export default Custombutton