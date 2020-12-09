import React, {useState, useEffect} from 'react';
import { axios } from '../../services/settings'

const HeaderProfile = () => {
  const [profilePhoto, setprofilePhoto] = useState(null)
  const [profileData, setprofileData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/one_profile`)
      const { data } = response
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