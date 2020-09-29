import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="nav_profile">
      <div className="nav_section">
        <NavLink to="/perfil" className="nav_profile_link" activeClassName="nav_profile_link_active">Perfil</NavLink>
      </div>
      <div className="nav_section">
        <NavLink to="/editar-perfil" className="nav_profile_link" activeClassName="nav_profile_link_active">Info</NavLink>
      </div>
      <div className="nav_section">
        <NavLink to="/editar-fotos" className="nav_profile_link" activeClassName="nav_profile_link_active">fotos</NavLink>
      </div>
    </nav>
   );
}
 
export default Navbar;