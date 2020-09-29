import React from 'react';

const ProfilePhotoContaint = () => {

  const getPhoto = e => {
    console.log(e.target.files[0])
    
  }

  return ( 
    <section className="profile_photo_containt">
      <p>Foto de perfil</p>
      <form className="profile_photo_containt_form">
        <div className="profile_photo_containt_box">
        </div>
        <input
          type="file"
          name="photos"
          id="photo_profile"
          onChange={getPhoto} />
        <label htmlFor="photo_profile">Selecciona tu Foto</label>
      </form>
    </section>
   );
}
 
export default ProfilePhotoContaint;