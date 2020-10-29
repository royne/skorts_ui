import React from 'react';

const ProfilePhoto = ({url, data}) => {
  const active = (e) => {
    const elm = e.target
    elm.classList.contains('active_ico') ? elm.classList.remove('active_ico') : elm.classList.add('active_ico')
  }
  return ( 
    <div className="container_photo">
      <div className="container_photo_header">
        <img src={data.profile_photo.url} />
        <span>@{data.username}</span>
      </div>

      <div className="profile_photo">
        <div className="profile_photo_content">
          <img src={url} id={data.id} />
        </div>
      </div>

      <div className="container_photo_footer" >
        <span onClick={active}><i className="far fa-star" ></i></span>
        <i className="far fa-comments"></i>
      </div>
    </div>
   );
}
 
export default ProfilePhoto;