import React, { useState, useEffect } from 'react';

const ProfileBody = () => {
  const [escortPhotos, setEscortPhotos] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:4000/api/v1'
      const response = await fetch(`${url}/escort_profiles/1`)
      const data = await response.json()
      setEscortPhotos(data.photos)
    }
    getData()
  }, [])

  return ( 
    <section>
      {escortPhotos && escortPhotos.map(e => {
        return (
          <img key={e.id} src={e.url} id={e.id} className="img_profile"/>
        )
      })}
    </section>
   );
}
 
export default ProfileBody;