import React from 'react';
import profileImg from "../IMG/adarshmitr-profileimg.png"


const menu = () => {
  return (
    <div className='menu'>
     <a className='profile'>
     <span >
      <img className="profile-pic" src={profileImg} alt='profile-pic' title="I'm Adarsh"/>
      </span>
      <h2>Adarsh Kumar Patel</h2>
     </a>
     
     
      <ul className='menu-items'>
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>My Work</li>
        <li>Contact</li>
      </ul>

      <div >
        <ul className='sm-links'>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          
        </ul>
      </div>
    </div>
  )
}

export default menu