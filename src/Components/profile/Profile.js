import React from 'react';
import Menubar from './Menubar'
import '../../styles/profile.css';
import HeaderProfile from './HeaderProfile';
import ProfileBody from './ProfileBody';

const Profile = () => {
  return ( 
    <main className="profile">
      <HeaderProfile />
      <ProfileBody />
      <Menubar />
    </main>
   );
}
 
export default Profile;