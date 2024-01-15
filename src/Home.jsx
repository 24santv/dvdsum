import './App.css'
import back from './assets/dg.jpg'
import zebra from './assets/zebra.png'

export default function App() {
  return (
    <main>
      <img className="backimg" src={back} />
      <div className="Titles">
        <img className="zebra" src={zebra} />
        PEAPALMS
        <div className="Paragraphs">
          <p>Welcome</p>
        </div>
      </div>
      <div className="Border">
        <div className="Paragraphs">
          <p>Guatemala city guide</p>
        </div>
        <div className="Button">
          <button onClick={() => window.location.href = "/services"}> > Services</button>
          <button onClick={() => window.location.href = "/About"}> > About</button>
        </div>
      </div>
      <div classnName="SignLog">
         <button onClick={() => window.location.href = "/services"}> > Sign Up</button>
        
      </div>
    </main>
  )
}
