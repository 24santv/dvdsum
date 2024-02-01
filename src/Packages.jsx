import './App.css'
import DirectionStack from './PackStack';
import ZeroWidthStack from './Comments';
import BarButton from './BarButton';
import back from './assets/olive.jpg'
import Grid from '@mui/material/Grid';

function Packages(props) {
  return (
    <div>
      <img className="backimg" src={back} />
      {/* Your JSX content goes here */}
      <BarButton buttons = {[
        {name: "Home", color: "white", variant:"text", href:"/"},
        {name: "Services", color: "white", variant:"text", href:"/Services"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Border4">
        <div className="Services">
          <p>Peapalm Grove</p>
        </div>
        </div>
        <div className="Rooms"><p>Embark on an adventure with our Active Pack, tailored for thrill-seekers. 
          Enjoy jungle hikes, zip-lining, and exciting outdoor events that will satisfy your adventurous spirit. 
          For those craving serenity, our Relaxation Pack offers spa indulgence, yoga sessions, and tranquil nature walks, 
          providing the ultimate retreat for rejuvenation. The Mix Pack is a perfect blend, offering a bit of both worlds—adventure and relaxation.
           If you seek a personalized experience, our Custom Pack allows you to tailor your stay, 
          ensuring every moment aligns with your preferences. No matter your choice, our diverse packages promise a memorable and bespoke jungle getaway.</p>
            </div>
            <DirectionStack></DirectionStack>
            <BarButton buttons = {[
        {name: "Standard", color: "white", variant:"text", },
        {name: "Hybrid", color: "white", variant:"text", },
        {name: "Custom", color: "white", variant:"text", },
      ]} fontSize="Large" />
      <div className="Border4">
        <div className="Services">
          <p>Register</p>
        </div>
        </div>
    </div>
  );
}
export default Packages;