import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
      <div className='container'>
        <h1 style={{ marginLeft: '1', color: 'red' }}>TokenExchangePro</h1>
        <ul className={click ? 'nav active' : 'nav'}>
          <li className="nav-item">
            <a href='/'>Platform</a>
          </li>
          <li className="nav-item">
            <a href='/'>Developers</a>
          </li>
          <li className="nav-item">
            <a href='/'>Community</a>
          </li>
          <li className="nav-item">
            <a href='/'>About</a>
          </li>
          <li className="nav-item">
            <a className='btn' href='/'>Use TEP</a>
          </li>
        </ul>
        <div onClick={handleClick} className='hamburger'>
          {click ? <GrClose className='icon' /> : (<GiHamburgerMenu className='icon' />)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
