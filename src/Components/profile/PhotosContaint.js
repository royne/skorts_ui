import React, {Fragment, useState, useEffect} from 'react';
import Photo from './Photo';

const PhotosContaint = () => {

  const [data, setData] = useState(null)

  const getData = async () => {
    const url = 'http://localhost:4000/api/v1'
    const response = await fetch(`${url}/escort_profiles/2`)
    const data = await response.json()
    setData(data.photos)
  }

  useEffect(() => {
    getData()
  }, [])

  const getPhotos = async e => {
    const url = 'http://localhost:4000/api/v1'
    const formData = new FormData();
    const arrayPhotos = Array.from(e.target.files)
    arrayPhotos.map((elm, i) => formData.append(`photos_${i}`, elm))
    const response = await fetch(`${url}/escort_profiles/2`, {
      method: 'PATCH',
      body: formData
    })
    getData()
  }

  return (
    <Fragment>
      <section className="photos_containt">
        <p>Fotos</p>
        <form 
          className="photos_containt_form"
          encType="multipart/form-data">
          <input
            type="file"
            accept="image/*" 
            multiple={true}
            name="photos"
            id="photos_conataint_profile"
            onChange={getPhotos} />
          <label htmlFor="photos_conataint_profile">Selecciona tus Fotos</label>
        </form>
      </section>

      <section className="section_photos">
        {data && data.map(e => {
          return (
            <Photo key={e.id} url={e.url} id={e.id} />
          )
        })}
      </section>
    </Fragment> 
   );
}
 
export default PhotosContaint;