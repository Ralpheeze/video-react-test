import { useState } from 'react'
import Grid from '../../components/grid/Grid'   
import Navbar from '../../components/navbar/Navbar'
import Gallery from '../Gallery/Gallery'
import './home.css'
import Tour from '../Tour/Tour'
import Checks from '../../components/check/Checks'


const Home = () => {
    
    // function img(anything) {
    //     document.querySelector('.slide').src = anything;
    // }
    // function change(change) {
    //     const line = document.querySelector('.image');
    //     line.style.background = change;
    // }
    
  return (
    <div className='Home'>        
        {/* <video autoPlay loop muted plays-inline poster='AI-trance-picland.png' id="myVideo">
            <source src="videos/AI-trance1land.mp4" type="video/mp4"/>
        </video> */}
        
        <div className="home-security">
            <div className="home-guard">
                <div className='container home-image'>
                    <img src="images/hotelfront2land.jpg" alt="" className='slide image-img img-fluid'/>
                </div>

                <Navbar/>
            </div>

            
        </div>  

        <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="cont-left-col">
                            <div className="contTitle">Welcome to Umbrella Academy</div>

                            <div className="contContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo, alias laborum molestiae iusto ducimus delectus voluptas asperiores amet dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at fugit id illo eveniet ipsum, eius quidem vero corporis modi?</div>

                            <div className="contBtn">
                                <button className="firstBtn" type='submit'>SEE ROOMS & RATES</button>         
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    </div>

)
}

export default Home;
