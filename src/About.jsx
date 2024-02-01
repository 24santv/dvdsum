import './App.css'
import back from './assets/beige.jpg'
import AboutPack from './AboutPack';
import BarButton from './BarButton';
import InputWithIcon from './Input';
import AlertDialogSlide from './Dialogue';
import Love from './audio/LadyInMyLife.mp3'
import TotalAvatars from './Avatars';

function About(props) {
  return (
    <div>
      <img className="backimg" src={back} />
      <audio autoplay="autoplay">
     <source src={Love} />     
 </audio>
      {/* Your JSX content goes here */}
      <BarButton buttons = {[
        {name: "Home", color: "white", variant:"text", href:"/"},
        {name: "Services", color: "white", variant:"text", href:"/Services"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Border6">
        <div className="Services">
          <p>Peapalm Grove</p>
          
        </div>
        </div>
        <div className="Rooms"><p>At PeaPalms, our exceptional staff is the heartbeat 
          of our hospitality. Committed to creating memorable experiences, our team embodies warmth, 
          professionalism, and a genuine passion for service. The roots of our dedication trace back through generations, as the 
          founders, inspired by their grandparents' legacy, have seamlessly passed down the values that define our hospitality. 
          With a deep connection to the founding principles, our staff takes pride in upholding a tradition of excellence 
          that has evolved over the years. At PeaPalms, our commitment to service is not just a job – it's a family legacy that continues to flourish with each passing generation.</p>
         </div>
         <AboutPack></AboutPack>
         <div className="Rooms"><p><div className="Rooms"><p>Fueled by their shared passion for hospitality, the founders of PeaPalms
           fell in love and embarked on a journey to create a haven that seamlessly blended tradition and innovation. 
          United by their commitment to family values, their love story became the foundation of the flourishing PeaPalms legacy.</p>
          <InputWithIcon></InputWithIcon>
          <AlertDialogSlide></AlertDialogSlide>
         </div></p>
         </div>
         <div className="Border6">
        <div className="Services">
          <p>Register</p>
        </div>
        </div>

    </div>
  );
}
export default About;