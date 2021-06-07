import logo  from './images/logo.png';
import './Logo.css'

const Logo = ({isAuth,dailyRate}) => {

  return (
    <>
      <a href={isAuth  ? "/calculator" :  "/"} className='logoContainer'>
        <img src={logo} alt='logo' className='logoImage' />
        {isAuth ?(
          <>
            <p className="textSlimAuth">Slim </p>
            <p className="textMomAuth">Mom </p>
        </>
        ) : (
          <>
            <p className='textSlim'>Slim</p>
            <p className='textMom'>Mom</p>
          </>
        )}
        
      </a>
    </>
  );
};

export default Logo;
