import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {isAuth} from '../../redux/auth/authSelectors';
import mainRoutes from '../../routes/mainRoutes';
import NavigationItem from './NavigationItem';
import '../../styles/components/navigation.scss';

const Navigation = ({ isActive, onToggleBurger }) => {
  const authFlag = useSelector(isAuth);
  const burgerFlag = isActive;

  return (
    <>
        <div className="nav" isActive={burgerFlag}>
        {mainRoutes.map(route => (
          <NavigationItem
            {...route}
            key={route.path}
            isAuth={authFlag}
            onToggleBurger={onToggleBurger}
            isActive = {isActive}
          />
        ))}
        </div>
    </>
  );
};

export default Navigation;
