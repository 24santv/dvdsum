import './App.css'
import BarButton from './BarButton';
import back from './assets/sage.jpg'
import ImageList from './ImageList';
import StackR from './Stack';

function Rooms(props) {
  return (
    <div>
      <img className="backimg" src={back} />
      {/* Your JSX content goes here */}
      <BarButton buttons = {[
        {name: "Home", color: "white", variant:"text", href:"/"},
        {name: "Services", color: "white", variant:"text", href:"/Services"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Border3">
        <div className="Services">
          <p>Peapalm Grove</p>
        </div>
        </div>
        <div className="Rooms"><p>Discover the charm of our diverse rooms, 
          each crafted to cater to your desires. Luxuriate in our spacious deluxes, experience personalized touches in our themed specials and suits, 
          or find comfort in our stylish standard rooms. At PeaPalms, we promise a stay where every room, 
          regardless of category, is a haven of relaxation and refinement, offering a memorable retreat amidst the beauty of nature.</p>
            </div>
            <ImageList></ImageList>
      <div className="Border3">
        <div className="Services">
          <p>Register</p>
        </div>
        </div>

    </div>
  );
}
export default Rooms;