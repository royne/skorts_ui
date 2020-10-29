import React, { useState, useEffect } from 'react';
import ProfilePhoto from './ProfilePhoto';

const ProfileBody = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:4000/api/v1'
      const response = await fetch(`${url}/escort_profiles/1`)
      const data = await response.json()
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