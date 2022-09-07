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
        <div>
          <button className="likeinactive" type="button" onClick={likeHandleClick}>
            
          </button>
          
          <button className="dislikeinactive" type="button" onClick={dislikeHandleClick}>
            
          </button>
        </div>
      );
    };
    
    export default Custombutton