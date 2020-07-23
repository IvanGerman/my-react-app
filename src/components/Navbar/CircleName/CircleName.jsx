import React from 'react';
import s from './../Navbar.module.css';


const CircleName = (props) => {
  return (
    <div className = {s.orangesquare}>
                <img alt = "" src = "https://i.imgur.com/9yILi61g.png" />
                <div>{props.circlenames}</div>
    </div>
  )
};

export default CircleName;
