// import Grid from "./components/grid/Grid";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Gallery from './pages/Gallery/Gallery';
import Booking from './pages/Booking/Booking';
import Tour from './pages/Tour/Tour';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
        
            {/* <Routes>
                <Route exact path="/" element={<Home/>} />        
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/book" element={<Booking/>} />                    
            </Routes> */}
            <Home/>
            {/* <Checks/> */}
            <Tour/>
            {/* <Grid/> */}
            <Gallery/>
        </div>
    </BrowserRouter>
  );
}

export default App;
