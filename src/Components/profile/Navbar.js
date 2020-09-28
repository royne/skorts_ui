import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="nav_profile">
      <div className="nav_section">
        <Link to="/perfil" className="nav_profile_link">Perfil</Link>
      </div>
      <div className="nav_section">
        <Link to="/editar-perfil" className="nav_profile_link">Info</Link>
      </div>
      <div className="nav_section">
        <Link to="/editar-fotos" className="nav_profile_link">fotos</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;