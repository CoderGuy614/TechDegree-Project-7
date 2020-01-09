import React from 'react';
import { NavLink } from 'react-router-dom'
const Nav = props => (
// Links for navigating to the photos of each category.
    <nav class="main-nav">
    <ul>
      <li><NavLink to='/elephants'>Elephants</NavLink></li>
      <li><NavLink to='/birds'>Birds</NavLink></li>
      <li><NavLink to='/otters'>Otters</NavLink></li>
    </ul>
  </nav>   
  
);

export default Nav