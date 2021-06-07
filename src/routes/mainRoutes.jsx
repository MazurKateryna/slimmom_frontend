import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/home/Home')),
    isPrivate: false,
    restricted: false,
    general: true
  },
  {
    path: '/login',
    name: 'Вход',
    exact: false,
    component: lazy(() => import('../pages/login/Login')),
    isPrivate: false,
    restricted: true,
    
  },
  {
    path: '/diary',
    name: 'Дневник',
    exact: false,
    component: lazy(() => import('../pages/diary/Diary')),
    isPrivate: true,
    restricted: true,
  },
  {
    path: '/calculator',
    name: 'Калькулятор',
    exact: false,
    component: lazy(() => import('../pages/calculator/Calculator')),
    isPrivate: true,
    restricted: false,
  },
  {
    path: '/register',
    name: 'Регистрация',
    exact: false,
    component: lazy(() => import('../pages/registration/Registration')),
    isPrivate: false,
    restricted: true,
  },
];

export default mainRoutes;
