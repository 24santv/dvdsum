import './App.css'
import SpaPack from './RestPack';
import back from './assets/lg.jpg'
import BarButton from './BarButton';
import HoverRating from './Rating';
import ZeroWidthStack from './Comments'

function Restaurant(props) {
  return (
    <div>
      <img className="backimg" src={back} />
      {/* Your JSX content goes here */}
      <BarButton buttons = {[
        {name: "Home", color: "white", variant:"text", href:"/"},
        {name: "Services", color: "white", variant:"text", href:"/Services"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Border2">
        <div className="Services">
          <p>Peapalm Grove</p>
        </div>
        </div>
        <div className="Rooms"><p>Savor a culinary journey at our delightful restaurant,
             where a diverse menu caters to every palate. Indulge in the rich flavors of typical local dishes,
              immersing yourself in the authentic tastes of the region. For those seeking a taste of home, our menu extends beyond borders, 
              offering homesick comfort foods that evoke familiar flavors and nostalgia.
               Whether you crave the bold spices of local cuisine or the comfort of international dishes,
             our restaurant is a gastronomic haven where every meal is a celebration of diverse flavors and culinary excellence.</p>
            </div>
            <SpaPack></SpaPack>
            <div className="SevParag">
                <ZeroWidthStack></ZeroWidthStack>
            
            </div>
            <div className="Border2">
        <div className="Services">
          <p>Register</p>
        </div>
        </div>
    </div>
  );
}
export default Restaurant;