import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import authOperations from '../../redux/auth/authOperations';
import '../../styles/components/authPage.scss';

export default function LogInPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function resetForm() {
    setEmail('');
    setPassword('');
  }
  const handleSubmitLog = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };


  return (
      <div className="auth_container">
      <div className="auth"></div>
      <section className="section__auth_login">
          <h2>вход</h2>
            <form className="form">
             
                <input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="email"
                />
                <input
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Пароль *"
                  onChange={e => setPassword(e.target.value)}
                  className="pass"
                />
              <div className="btn">
                <button
                  type="submit"
                  className="btn__sign-in sign__hover"
                  onClick={e => handleSubmitLog(e)}
                >
                  Вход
                </button>
                <button
                  type="button"
                  className="btn__sign-up sign__hover"
                  onClick={()=> history.push("/register")}
                >
                  Регистрация
                </button>
              </div>
            </form>
        <ToastContainer
          className="ToastContainer"
          position="top-center"
          autoClose={4000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
      </div>
    );
  }