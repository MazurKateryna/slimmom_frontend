import { createReducer } from '@reduxjs/toolkit';
import notificActions from './notificActions';

const notificationReducer = createReducer(false, {
  [notificActions.showNotification]: () => true,
  [notificActions.hideNotification]: () => false,
});

export default notificationReducer;