import './App.css'
import BarButton from './BarButton';
import StackR from './Stack';
import IconContainer from './Stars';
import Activity from './Activity';
import ResponsiveStack2 from './Stack2';
import back from './assets/mg.jpg'
import actual from './assets/actualhotel.jpg'
import Love from './audio/IsThisLove.mp3'
import Grid from '@mui/material/Grid';

function Services(props) {
  return (
    <div>
      <img className="backimg" src={back} />
      <audio autoplay="autoplay">
     <source src={Love} />     
 </audio>
 
      {}
      <BarButton buttons = {[
        {name: "Home", color: "white", variant:"text", href:"/"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Border1">
        <div className="Services">
          <p>Peapalm Grove</p>
        </div>
        </div>
        <div className="SevParag"><p>We are the epitome of jungle luxury—a franchised hotel nestled in the heart of untamed beauty. Embracing the 
            allure of the wild, our accommodations offer a unique blend of comfort and adventure, 
            providing an unforgettable experience in the heart of nature. 
            Explore the enchantment of the jungle with our distinct franchise, where each location promises an immersive and harmonious escape.</p>
            <img src={actual} />
            </div>
            <div>...</div>
            <div className="SevParag">
            <BarButton buttons = {[
        {name: "Rooms", color: "white", variant:"text", href:"/Rooms"},
        {name: "Packages", color: "white", variant:"text", href:"/Packages"},
        {name: "Spas", color: "white", variant:"text", href:"/Spas"},
        {name: "Restaurants", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <ResponsiveStack2></ResponsiveStack2>
            </div>
            <div className="Border1">
        <div className="Services">
          <p>Register</p>
        </div>
        </div>
    </div>
  );
}
export default Services;
