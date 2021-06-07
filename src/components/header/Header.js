import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';
import UserInfo from '../userInfo/UserInfo';
import Navigation from '../navigation/Navigation';
import { isAuth } from '../../redux/auth/authSelectors';
import './Header.css'
import openMenu from '../../assets/images/burgerMenu/openMenu.svg';
import closeMenu from '../../assets/images/burgerMenu/closeMenu.svg';
import healthSelectors from '../../redux/health/healthSelectors';

const Header = () => {
  const authFlag = useSelector(isAuth);
  const dailyRate = useSelector(healthSelectors.getDailyRate);
  const [menuBurger, setMenuBurger] = useState(false);
  const toggleBurger = () => setMenuBurger(!menuBurger);

  return (
    <div className='header'>
      <header className="headerContainer">
        <Logo isAuth={authFlag} dailyRate={dailyRate} />
        <div className='navigationContainer'>
          <Navigation isAuth={authFlag} />
          {authFlag && (
          <button type="button" onClick={toggleBurger}>
            {!menuBurger ? (
              <img src={openMenu} alt="" />
            ) : (
              <img src={closeMenu} alt="" />
            )}
          </button>
        )}
        </div>
        
        {authFlag && <UserInfo />}

        {authFlag && menuBurger && (
          <div className="navWrapper">
              <Navigation
                isActive={menuBurger}
                onToggleBurger={toggleBurger}
              />
          </div>
        )}          
      </header>
    </div>
  );
};

export default Header;
