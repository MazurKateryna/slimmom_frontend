import React from 'react';
import '../../styles/components/notification.scss';

const Notification = ({ text, icon = '', error = '', alert = '' }) => {
  return (
    <div error={error} alert={alert} className='notif'>
      <p>
        <span style={{ marginRight: '10px' }}>{icon}</span>
        {text}
      </p>
    </div>
  );
};

export default Notification;
