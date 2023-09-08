import './owlcarousel.css';

export default function Owlcarousel() {
  return (
    <div>
        <div className="container">
            <div className="slide">
                <div className="slide-text">
                    <div><h5 className="slide-head1">WELCOME TO OUR PHOTO GALLERY</h5></div>
                    <div><h2 className="slide-head2">Photo Gallery of Our Hotel</h2></div>
                    {/* <div className="slide-button">
                        <div className="slide-btn">VIEW GALLERY</div>
                    </div> */}
                </div>

                <div className="slide-control">
                    <div class="owl-one owl-carousel first owl-theme">
                        <div class="item">
                            <img src="images/spa/hotelspa1land.jpeg" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/spa/hotelspa1port.jpeg" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/lobby/hotellobby1land.avif" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/lobby/hotellobby1port.avif" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/bath/hotelbath1land.jpg" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/bath/hotelbath2land.jpg" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/balcony/hotelbalcony1land.jpeg" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/balcony/hotelbalcony1port.jpeg" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/balcony/hotelbalcony2land.jpeg" alt="" className='slide-img' />
                        </div>
                        <div class="item">
                            <img src="images/balcony/hotelbalcony3land.jpeg" alt="" className='slide-img' />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
