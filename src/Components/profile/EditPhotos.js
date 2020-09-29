import React from 'react';
import Menubar from './Menubar'
import ProfilePhotoContaint from './ProfilePhotoContaint';
import PhotosContaint from './PhotosContaint';

const EditPhotos = () => {
  return ( 
    <main className="profile">
      <h1>Actualiza Tus Fotos</h1>
      <ProfilePhotoContaint />
      <PhotosContaint />
      <Menubar />
    </main>
   );
}
 
export default EditPhotos;