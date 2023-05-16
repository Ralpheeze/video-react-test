import { Link } from 'react-router-dom';
import './secnavbar.css';

export default function Secnavbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg my-sec-bar fixed-top "> 
            <a class="navbar-brand secTitle" href="#"><i class="fa fa-umbrella fa-flip nav-icon"></i>Umbrella 
            <br /> Academy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon span-tog">   
                    <i class="fa fa-navicon"></i>
                </span>
                {/* <span class="navbar-toggler-icon bg-dark text-white span-tog"></span> */}
            </button>
            <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item sec-l">
                         <Link to= '/'>
                            <a class="nav-link sec-href" href="#">Home</a>
                        </Link> 
                    </li>

                    <li class="nav-item sec-l">
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle sec-href sec-tour-drop " href="#" role="button" data-toggle="dropdown" aria-expanded="false">Tour </a>

                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Bedrooms</a>
                                <a className="dropdown-item" href="#">Lobby</a>
                                <a className="dropdown-item" href="#">Bar</a>
                            </div>
                        </div>                  
                    </li>

                    <li class="nav-item sec-l">
                        <Link to = "/gallery">
                            <a class="nav-link sec-href">Gallery</a>
                        </Link>
                    </li>

                    <li class="nav-item sec-l">
                        <Link to="/book">
                            <a class="nav-link sec-href">Book now</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
