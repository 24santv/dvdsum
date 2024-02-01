import './App.css'
import BarButton from './BarButton';
import back from './assets/dg.jpg'
import zebra from './assets/zebra2.png'
import semuq from './assets/semuq.jpg'
import arbol from './assets/arbol.jpg'
import volc from './assets/volc.jpg'
import beach from './assets/beach.jpg'
import Grid from '@mui/material/Grid';


export default function App() {
  return (
    <main>
      <img className="backimg" src={back} />
      <BarButton buttons = {[
        {name: "Services", color: "white", variant:"text", href:"/Services"},
        {name: "About", color: "white", variant:"text", href:"/About"},
      ]} fontSize="Large" />
      <div className="Titles">
        <img className="zebra" src={zebra} />
        PEAPALMS
      </div>
      <div>...</div>
      <div className="Border">
        <div className="Paragraphs">
          <p>Welcome</p>
          <p>Guatemala Tourist Guide</p>
        </div>
      </div>
      <div>  ... </div>
      <div className="Beg">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img className="img-grd" src={volc} />
            </Grid>
            <Grid item xs={3}>
              <img className="img-grd" src={arbol} />
            </Grid>
            <Grid item xs={3}>
              <img className="img-grd" src={semuq} />
            </Grid>
            <Grid item xs={3}>
              <img className="img-grd" src={beach} />
            </Grid>
          </Grid>
        </div>
        <div>...</div>
    </main>
  )
}
