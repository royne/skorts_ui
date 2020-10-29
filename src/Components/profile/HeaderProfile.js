import React, {useState, useEffect} from 'react';

const HeaderProfile = () => {
  const [profilePhoto, setprofilePhoto] = useState(null)
  const [profileData, setprofileData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:4000/api/v1'
      const response = await fetch(`${url}/escort_profiles/1`)
      const data = await response.json()
      setprofileData(data)
      if (data.profile_photo) setprofilePhoto(data.profile_photo.url)
    }
    getData()
  }, [])

  return ( 
    <header className="profile_header">
      <div className="profile_photo_containt_box">
        {profilePhoto && <img src={profilePhoto} />}
      </div>
      <div className="">
        <p>{profileData && profileData.username}</p>
        <p>{profileData && profileData.age}</p>
      </div>
    </header>
   );
}
 
export default HeaderProfile;