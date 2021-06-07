import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import '../../styles/components/userInfo.scss';

const UserInfo = ({ name, onLogout }) => {
  const history = useHistory();
  const logOut = () => {
    onLogout();
    history.push('/login');
  };

  return (
    <div className='userContainer'>
      <div className='userName'>{name}</div>
      <button className='userLogout' type="button" onClick={logOut}>
        Выйти
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOutOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
