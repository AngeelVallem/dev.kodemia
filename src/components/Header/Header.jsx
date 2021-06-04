import React from "react";

import HeaderLogo from './HeaderLogo'
import Search from './Search'
import AppButton from '../appButton'
import AppThemeToggle from '../AppThemeToggle'

import '../../css/header.css'
import  "../../css/login.css";
import "../../css/sign-up.css";


class Header extends React.Component {
  render() {
    return (
      <nav className="header d-flex shadow-sm justify-content-between px-5">
       <div className='d-flex align-items-center'>
       <HeaderLogo/>
          <Search/>
       </div>
         <div className='d-flex align-items-center'>
            <AppButton
              text='Log in'
              type='anchor'
              url='/#'
              styles='login-btn'
            />
            <AppButton
              text='Create account'
              styles='sign-up'
            />
            <AppThemeToggle/>
         </div>
      </nav>
    );
  }
}



export default Header;