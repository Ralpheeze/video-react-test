import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg  shadow-5-strong my-nav-bar">
            <a class="navbar-brand text-white navTitle" href="#"><i class="fa fa-umbrella fa-flip nav-icon"></i> Umbrella 
            <br /> Academy</a>

            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon span-3lines">   
                    <i class="fa fa-navicon"></i>
                </span>
                {/* <span class="navbar-toggler-icon "></span> */}
            </button>
            
            <div class="collapse navbar-collapse justify-content-end text-center " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item nav-l">
                        <Link to= '/'>
                            <a class="nav-link nav-href" href="#">Home</a>
                        </Link>                        
                    </li>                    
                    <li class="nav-item nav-l">
                        <Link to = "/tour">
                            <a class="nav-link nav-href">Tour</a>
                        </Link>
                        
                    </li>

                    <li class="nav-item nav-l">
                        <Link to = "/gallery">
                            <a class="nav-link nav-href">Gallery</a>
                        </Link>
                    </li>

                    <li class="nav-item nav-l">
                        <Link to="/book">
                            <a class="nav-link nav-href">Book now</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
