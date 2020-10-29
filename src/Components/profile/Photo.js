import React from 'react';

const Photo = ({id, url}) => {
  return ( 
    <div className="box_photo">
      <div className="box_photo_content">
        <img src={url} id={id} />
        <div className="btn_destroy" id={id}>x</div>      
      </div>
    </div>
   );
}
 
export default Photo;