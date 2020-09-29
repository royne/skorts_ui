import React from 'react';
import Navbar from './Navbar'
import ProfilePhotoContaint from './ProfilePhotoContaint';
import PhotosContaint from './PhotosContaint';

const EditPhotos = () => {
  return ( 
    <main className="profile">
      <h1>Actualiza Tus Fotos</h1>
      <ProfilePhotoContaint />
      <PhotosContaint />
      <Navbar />
    </main>
   );
}
 
export default EditPhotos;