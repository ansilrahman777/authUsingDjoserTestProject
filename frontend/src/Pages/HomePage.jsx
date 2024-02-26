import Header from '../Components/User/Header/Header';
import home_bg from './../assets/Images/home_bg.jpg';

function HomePage() {
  return (
    <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${home_bg})`, backgroundSize: 'cover' }}>
      <Header />

    </div>
  );
}

export default HomePage;
