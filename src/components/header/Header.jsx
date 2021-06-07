import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';
import UserInfo from '../userInfo/UserInfo';
import Navigation from '../navigation/Navigation';
import {isAuth} from '../../redux/auth/authSelectors';
import './Header.scss'
import openMenu from '../../assets/images/burgerMenu/openMenu.svg';
import closeMenu from '../../assets/images/burgerMenu/closeMenu.svg';
import healthSelectors from '../../redux/health/healthSelectors';

const Header = () => {
  const authFlag = useSelector(isAuth);
  const dailyRate = useSelector(healthSelectors.getDailyRate);
  const [menuBurger, setMenuBurger] = useState(false);
  const toggleBurger = () => setMenuBurger(!menuBurger);

  return (
    <>
      <div className='headerContainer'>
        <div className="container">
            <Logo isAuth={authFlag} dailyRate={dailyRate}/>
            <div className='nav'>
              <Navigation isAuth={authFlag}/>
            </div>
            <div className='headerWrapper'>
              <div className='userInfoContainer't>
                {authFlag && <UserInfo />}
              </div>

              {authFlag && (
                <div className='burgerButton'type="button" onClick={toggleBurger}>
                  {!menuBurger ? (
                    <img src={openMenu} alt="" />
                  ) : (
                    <img src={closeMenu} alt="" />
                  )}
                </div>
              )}

              {authFlag && menuBurger && (
                <div className="navWrapper">
                  <div className='navActive'>
                    <Navigation
                      isActive={menuBurger}
                      onToggleBurger={toggleBurger}
                    />
                  </div>
                </div>
              )}

              <div className='userInfoContainer'>
                {authFlag && <UserInfo />}
              </div>
            </div>
        </div>
      </div>

      <div className='userInfoContainer'>
        {authFlag && <UserInfo />}
      </div>
    </>
  );
};

export default Header;
