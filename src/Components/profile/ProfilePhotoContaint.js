import React, { useState, useEffect } from 'react';

const ProfilePhotoContaint = () => {

  const [data, setData] = useState(null)

  const getData = async () => {
    const url = 'http://localhost:4000/api/v1'
    const response = await fetch(`${url}/escort_profiles/1`)
    const data = await response.json()
    if (data.profile_photo !== null) setData(data.profile_photo.url)
  }

  useEffect(() => {  
    getData()
  }, [])

  const getPhoto = async e => {
    const url = 'http://localhost:4000/api/v1'
    const formData = new FormData();
    formData.append('profile_photo', e.target.files[0]);
    const response = await fetch(`${url}/escort_profiles/1`, {
      method: 'PATCH',
      body: formData
    })
    if(response.ok){
      const data = await response.json()
      setData(data.profile_photo.url)
    }
  }

  return ( 
    <section className="profile_photo_containt">
      <p>Foto de perfil</p>
      <form name="escort_profile" className="profile_photo_containt_form">
        <div className="profile_photo_containt_box">
          { data && <img src={data} /> }
        </div>
        <input
          type="file"
          accept="image/*" 
          multiple={false}
          name="profile_photo"
          id="photo_profile"
          onChange={getPhoto} />
        <label htmlFor="photo_profile">Selecciona tu Foto</label>
      </form>
    </section>
   );
}
 
export default ProfilePhotoContaint;