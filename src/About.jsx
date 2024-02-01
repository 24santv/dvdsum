import './App.css'
import back from './assets/lg.jpg'
import BarButton from './BarButton';

function About(props) {
  return (
    <div>
      <img className="backimg" src={back} />
      {/* Your JSX content goes here */}
      <BarButton buttons = {[
        {name: "Home", color: "white", variant:"text", href:"/"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Border2">
        <div className="Services">
          <p>Peapalm Grove</p>
        </div>
        </div>

    </div>
  );
}
export default About;