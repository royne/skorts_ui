import React, {Fragment} from 'react';
import Photo from './Photo';

const PhotosContaint = () => {
  return (
    <Fragment>
    <section className="photos_containt">
      <p>Fotos</p>
      <form className="photos_containt_form">
        <input
          type="file"
          name="photos"
          id="photos_conataint_profile" />
        <label htmlFor="photos_conataint_profile">Selecciona tus Fotos</label>
      </form>
    </section>

    <section className="section_photos">
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </section>
  </Fragment> 
   );
}
 
export default PhotosContaint;