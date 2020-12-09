import React, { useState, useEffect } from 'react';
import ProfilePhoto from './ProfilePhoto';
import { axios } from '../../services/settings'

const ProfileBody = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/one_profile`)
      const { data } = response
      setData(data)
    }
    getData()
  }, [])

  return ( 
    <section>
      {(data && data.photos !== 0) && data.photos.map(e => <ProfilePhoto key={e.id} url={e.url} data={data} /> )}
    </section>
   );
}
 
export default ProfileBody;