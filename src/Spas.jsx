import './App.css'
import SpaPack from './SpaPack';
import back from './assets/TT.jpg'
import BarButton from './BarButton';
import IconContainer from './Stars';

function Spas(props) {
  return (
    <div>
      <img className="backimg" src={back} />
      {/* Your JSX content goes here */}
      <BarButton buttons = {[
        {name: "Home", color: "white", variant:"text", href:"/"},
        {name: "Services", color: "white", variant:"text", href:"/Services"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Border5">
        <div className="Services">
          <p>Peapalm Grove</p>
        </div>
        </div>
        <div className="Rooms"><p>Indulge in pure tranquility at our exquisite spa, where relaxation takes 
            center stage. Our Lovers Pack offers a romantic escape with couples' treatments, creating an 
            intimate and rejuvenating experience. The Rejuvenation package focuses on holistic well-being, featuring a variety of 
            massages and therapies to revitalize your mind and body. Even our Standard spa accommodations guarantee a blissful retreat,
             providing essential treatments for a refreshing and invigorating experience. Whether you're seeking romance, 
            rejuvenation, or simply a touch of relaxation, our spa offerings cater to every desire, ensuring a serene and rejuvenating escape amidst the jungle's beauty.</p>
            </div>
            <SpaPack></SpaPack>
            <BarButton buttons = {[
        {name: "Special", color: "white", variant:"text", },
        {name: "Rejuvenation", color: "white", variant:"text", },
        {name: "Standard", color: "white", variant:"text", },
      ]} fontSize="Large" />

            <div className="SevParag">
            <IconContainer></IconContainer>
            </div>
            <div className="Border5">
        <div className="Services">
          <p>Register</p>
        </div>
        </div>
    </div>
  );
}
export default Spas;