import Header from '../Components/User/Header/Header';
import home_bg from './../assets/Images/home_bg.jpg';
import dubai_img from './../assets/Images/dubai_img.jpg'
import './../index.css'


function HomePage() {

  const locations = [
    { name: 'DUBAI', color: 'bg-orange-500' },
    { name: 'WAYANAD', color: 'bg-green-500' },
    { name: 'MUNNAR', color: 'bg-blue-500' },
    { name: 'KOCHI', color: 'bg-yellow-500' },
    { name: 'PALAKKAD', color: 'bg-red-500' },
    { name: 'CALICUT', color: 'bg-orange-500' },
    { name: 'HIMACHAL', color: 'bg-teal-500' },
    { name: 'DELHI', color: 'bg-red-500' },
  ];
  
  const LocationCard = ({ name , color }) => (
    <div className={`w-24 h-24 rounded-full ${color} m-2 mb-1 flex items-center justify-center cursor-pointer`}>
      <p className="text-white text-sm">{name}</p>
    </div>
  );
  
  

  const topLocation = [
    {name:'DUBAI',image:dubai_img}
  ]

  const TopLocationCard = ({ name , image }) => (
    <div className="relative w-full h-full bg-cover flex items-center justify-center">
      <img src={image} alt={name} className="w-[970px] h-[450px] bg-cover rounded-2xl shadow-lg" />
      <p className="absolute inset-0 flex items-center justify-center text-center font-extrabold text-white text-9xl rounded-md cherry-bomb">
        {name}
      </p>
    </div>
  );
  
  
  


  return (
    <>
      <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${home_bg})`, backgroundSize: 'cover' }}>
        <Header />
      </div>

      <div className="p-10">
        <h1 className="text-2xl font-bold font-serif mb-2 ml-16">OUR LOCATIONS</h1>
        <p className="text-gray-700 font-semiboldfont-serif mb-4 ml-16">Browse destinations for your next holiday plan.</p>
        <div className="flex flex-wrap gap-10 justify-center p-10 ">
          {locations.map((location) => (
            <LocationCard key={location.name} {...location} />
          ))}
        </div>
      </div>
            
    <div className="flex m-48 mt-0  justify-center" >
      <div className="flex flex-wrap justify-center">
        {topLocation.map((location) => (
          <TopLocationCard key={location.name} {...location} />
        ))}
      </div>
    </div>
    </>

  );
}

export default HomePage;
