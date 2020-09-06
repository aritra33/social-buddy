import React from 'react';
import './Comments.css';
const Comments = ({ comment, image }) => {
  let peopleImage = '';
  if (image) {
    let { picture } = image;
    peopleImage = picture.medium;
  }
  const { name, body } = comment;
  return (
    <div className='comment'>
            <div className="img-class"> 
                <img className="img-round" src={peopleImage} alt=""/> 
            </div>
            <div className='ppl-name'>
                <h4>{name}</h4>
                <p>{body}</p>
            </div> 
    </div>
  );
};

export default Comments;