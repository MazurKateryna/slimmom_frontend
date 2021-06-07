import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm/DailyCaloriesForm';
import './Home.scss'

const Home = () => {
  return (
    <div className='Wrapper'>
      <div className="container">
        <DailyCaloriesForm />
      </div>
    </div>
  );
};

export default Home;
