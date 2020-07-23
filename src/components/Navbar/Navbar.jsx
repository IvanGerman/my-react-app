import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import CircleName from './CircleName/CircleName';




const Navbar = (props) => {
  
  let allCircleNames = props.state.circlenames.map( (c, i) =>
  <CircleName key = {i} circlenames = {c.circlenames} />
  );
  
  return (
     <nav className = {s.nav}>
        <div className = {s.item}>
          <NavLink to = "/profile" activeClassName = {s.active}>Profile</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/dialogs" activeClassName = {s.active}>Messages</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/news" activeClassName = {s.active}>News</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/music" activeClassName = {s.active}>Music</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/settings" activeClassName = {s.active}>Settings</NavLink>
        </div>


        <br/><br/><br/><br/>
        <div>
          <div className = {s.friends}>Friends</div>
          <div className = {s.nameandsquare}>
            
            {allCircleNames}

          </div>
        </div>
        
     </nav>   )
};

export default Navbar;
