import React from 'react';
import EditData from './EditData';
import '../../styles/profile.css';

const Profile = () => {
  return ( 
    <main className="profile">
      <h1>Perfil</h1>
      <EditData />
    </main>
   );
}
 
export default Profile;