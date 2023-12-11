import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">
         <img className="logo" src={logo} alt="로고" />
        </Link>
      </div>
      <div className="mypage">마이페이지</div>
    </div>
  );
};

export default Header;