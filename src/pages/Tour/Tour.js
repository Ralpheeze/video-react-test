import { useState } from 'react';
import './tour.css';

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Arrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 110) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read content" : " show less"}
      </span>
    </p>
  );
};

function Tour() {
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 2,
    //   nextArrow: <Arrow />,
    //   prevArrow: < Arrow />,
    //   initialSlide: 0,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 400,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         initialSlide: 2
    //       }
    //     } 
    //   ]
    // };

    return (
        <div>
            <div className="container tour bg-success">
                    <div><h2 className="tour-title">ROOMS & SUITES</h2></div>

                    <div className=" tour-slide-control ">
                        <div class="owl-two owl-carousel owl-theme">
                            <div className="items">
                                <div className="tour-control">
                                    <div className=" tour-image">
                                        <span className="tour-price">#40, 000/night</span>
                                        <img src="images/rooms/hotelroom3land.jpg" alt="tour pic" className='tour-img '/>
                                        <a href="#" class="tour-ct fa-sharp fa-solid fa-cart-shopping"></a>                        
                                    </div>

                                    <div className="tour-content">
                                        <div className="tour-info-supreme">
                                            <div className="tour-info">
                                                <div><h3 className="tour-head">Standard Room</h3></div>

                                                <ul className="tour-list-req">
                                                    <li className="tour-room-req">
                                                        <i class="fa fa-sharp fa-solid fa-border-none tour-icon-req"> 21 ㎡</i>
                                                    </li>

                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-req">
                                                        <i class="fa fa-light fa-user tour-icon2"> max. guests: 2 adults, 1 child ( 0 - 11 )</i>
                                                    </li>
                                                </ul>

                                                <div><p className="tour-text">
                                                        <ReadMore>
                                                            Our Standard Rooms with a king bed make a comfortable home away from home. After a round at Ikeja Golf Club, return to your room and enjoy a drink from the mini refrigerator while you watch your favorite TV show. Hungry for a midnight snack or an early breakfast? You can order something delicious from room service, which is available 24 hours. These standard amenities are also included:
                                                        </ReadMore>
                                                    </p>
                                                </div>

                                                <ul className="tour-room-items">
                                                    <li className="tour-room-li">
                                                        <i class="fa fa-thin fa-wifi tour-pen"><span className='tooltip-span-access'>Free Wifi</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-cast tour-pen"><span className="tooltip-span-access">Smart Screen TV</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="fa fa-thin fa-vault  tour-pen"><span className="tooltip-span-access">Safe Box</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-wind  tour-pen"><span className="tooltip-span-access">Air Conditioning</span></i>
                                                    </li>
                                                    
                                                </ul>       
                                            </div>

                                            <div className="tour-icons">
                                                <div className="tour-push">
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    
                                                    <div class="t-icon">                        
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star-half-alt tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tour-button">
                                                <a href="#" className="tour-btn">Book now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="items">
                                <div className="tour-control">
                                    <div className=" tour-image">
                                        <span className="tour-price">#40, 000/night</span>
                                        <img src="images/rooms/hotelroom4land.jpg" alt="tour pic" className='tour-img '/>
                                        <a href="#" class="tour-ct fa-sharp fa-solid fa-cart-shopping"></a>                        
                                    </div>

                                    <div className="tour-content">
                                        <div className="tour-info-supreme">
                                            <div className="tour-info">
                                                <div><h3 className="tour-head">Standard Room</h3></div>

                                                <ul className="tour-list-req">
                                                    <li className="tour-room-req">
                                                        <i class="fa fa-sharp fa-solid fa-border-none tour-icon-req"> 21 ㎡</i>
                                                    </li>

                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-req">
                                                        <i class="fa fa-light fa-user tour-icon2"> max. guests: 2 adults, 1 child ( 0 - 11 )</i>
                                                    </li>
                                                </ul>

                                                <div><p className="tour-text">
                                                        <ReadMore>
                                                            Our Standard Rooms with a king bed make a comfortable home away from home. After a round at Ikeja Golf Club, return to your room and enjoy a drink from the mini refrigerator while you watch your favorite TV show. Hungry for a midnight snack or an early breakfast? You can order something delicious from room service, which is available 24 hours. These standard amenities are also included:
                                                        </ReadMore>
                                                    </p>
                                                </div>

                                                <ul className="tour-room-items">
                                                    <li className="tour-room-li">
                                                        <i class="fa fa-thin fa-wifi tour-pen"><span className='tooltip-span-access'>Free Wifi</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-cast  tour-pen"><span className="tooltip-span-access">Smart Screen TV</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="fa fa-thin fa-vault  tour-pen"><span className="tooltip-span-access">Safe Box</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-wind  tour-pen"><span className="tooltip-span-access">Air Conditioning</span></i>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="tour-icons">
                                                <div className="tour-push">
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    
                                                    <div class="t-icon">                        
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star-half-alt tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tour-button">
                                                <a href="#" className="tour-btn">Book now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                             <div className="items">
                                <div className="tour-control">
                                    <div className=" tour-image">
                                        <span className="tour-price">#40, 000/night</span>
                                        <img src="images/rooms/hotelroom4port.jpg" alt="tour pic" className='tour-img '/>
                                        <a href="#" class="tour-ct fa-sharp fa-solid fa-cart-shopping"></a>                        
                                    </div>

                                    <div className="tour-content">
                                        <div className="tour-info-supreme">
                                            <div className="tour-info">
                                                <div><h3 className="tour-head">Superior Room</h3></div>

                                                <ul className="tour-list-req">
                                                    <li className="tour-room-req">
                                                        <i class="fa fa-sharp fa-solid fa-border-none tour-icon-req"> 21 ㎡</i>
                                                    </li>

                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-req">
                                                        <i class="fa fa-light fa-user tour-icon2"> max. guests: 2 adults, 1 child ( 0 - 11 )</i>
                                                    </li>
                                                </ul>

                                                <div><p className="tour-text">
                                                        <ReadMore>
                                                            Warm and inviting, our Superior Rooms with a king bed offer unparalleled views of the hotel pool. After a swim, you can wrap up in a plush bathrobe and slippers and then enjoy a snack in your room thanks to 24-hour room service. Upload vacation photos using free Wi-Fi, and catch your favorite TV show each morning while you prepare for your day in Lagos. All standard amenities, such as a mini refrigerator and a work desk, are included.
                                                        </ReadMore>
                                                    </p>
                                                </div>

                                                <ul className="tour-room-items">
                                                    <li className="tour-room-li">
                                                        <i class="fa fa-thin fa-wifi tour-pen"><span className='tooltip-span-access'>Free Wifi</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-cast  tour-pen"><span className="tooltip-span-access">Smart Screen TV</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="fa fa-thin fa-vault  tour-pen"><span className="tooltip-span-access">Safe Box</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-wind  tour-pen"><span className="tooltip-span-access">Air Conditioning</span></i>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="tour-icons">
                                                <div className="tour-push">
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    
                                                    <div class="t-icon">                        
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star-half-alt tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tour-button">
                                                <a href="#" className="tour-btn">Book now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                             <div className="items">
                                <div className="tour-control">
                                    <div className=" tour-image">
                                        <span className="tour-price">#40, 000/night</span>
                                        <img src="images/rooms/hotelroom5land.jpg" alt="tour pic" className='tour-img '/>
                                        <a href="#" class="tour-ct fa-sharp fa-solid fa-cart-shopping"></a>                        
                                    </div>

                                    <div className="tour-content">
                                        <div className="tour-info-supreme">
                                            <div className="tour-info">
                                                <div><h3 className="tour-head">Superior Room</h3></div>

                                                <ul className="tour-list-req">
                                                    <li className="tour-room-req">
                                                        <i class="fa fa-sharp fa-solid fa-border-none tour-icon-req"> 21 ㎡</i>
                                                    </li>

                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-req">
                                                        <i class="fa fa-light fa-user tour-icon2"> max. guests: 2 adults, 1 child ( 0 - 11 )</i>
                                                    </li>
                                                </ul>

                                                <div><p className="tour-text">
                                                        <ReadMore>
                                                            Warm and inviting, our Superior Rooms with a king bed offer unparalleled views of the hotel pool. After a swim, you can wrap up in a plush bathrobe and slippers and then enjoy a snack in your room thanks to 24-hour room service. Upload vacation photos using free Wi-Fi, and catch your favorite TV show each morning while you prepare for your day in Lagos. All standard amenities, such as a mini refrigerator and a work desk, are included.
                                                        </ReadMore>
                                                    </p>
                                                </div>

                                                <ul className="tour-room-items">
                                                    <li className="tour-room-li">
                                                        <i class="fa fa-thin fa-wifi tour-pen"><span className='tooltip-span-access'>Free Wifi</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-cast  tour-pen"><span className="tooltip-span-access">Smart Screen TV</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="fa fa-thin fa-vault  tour-pen"><span className="tooltip-span-access">Safe Box</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-wind  tour-pen"><span className="tooltip-span-access">Air Conditioning</span></i>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="tour-icons">
                                                <div className="tour-push">
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    
                                                    <div class="t-icon">                        
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star-half-alt tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tour-button">
                                                <a href="#" className="tour-btn">Book now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                             <div className="items">
                                <div className="tour-control">
                                    <div className=" tour-image">
                                        <span className="tour-price">#40, 000/night</span>
                                        <img src="images/rooms/hotelroom2land.jpg" alt="tour pic" className='tour-img '/>
                                        <a href="#" class="tour-ct fa-sharp fa-solid fa-cart-shopping"></a>                        
                                    </div>

                                    <div className="tour-content">
                                        <div className="tour-info-supreme">
                                            <div className="tour-info">
                                                <div><h3 className="tour-head">Premium Room</h3></div>

                                                <ul className="tour-list-req">
                                                    <li className="tour-room-req">
                                                        <i class="fa fa-sharp fa-solid fa-border-none tour-icon-req"> 21 ㎡</i>
                                                    </li>

                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-req">
                                                        <i class="fa fa-light fa-user tour-icon2"> max. guests: 2 adults, 1 child ( 0 - 11 )</i>
                                                    </li>
                                                </ul>

                                                <div><p className="tour-text">
                                                        <ReadMore>
                                                            Perfect for business travelers, each Premium Room is outfitted with a king bed, all standard amenities, and perks like a bathrobe and slippers. Enjoy special VIP amenities as you prepare for a meeting in Ikeja, and then unwind with a refreshing drink from the mini refrigerator and a meal from our 24-hour room service. Need to check in with the office? Set up your laptop on the work desk and log in to our free Wi-Fi.
                                                        </ReadMore>
                                                    </p>
                                                </div>

                                                <ul className="tour-room-items">
                                                    <li className="tour-room-li">
                                                        <i class="fa fa-thin fa-wifi tour-pen"><span className='tooltip-span-access'>Free Wifi</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-cast  tour-pen"><span className="tooltip-span-access">Smart Screen TV</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="fa fa-thin fa-vault  tour-pen"><span className="tooltip-span-access">Safe Box</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-wind  tour-pen"><span className="tooltip-span-access">Air Conditioning</span></i>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="tour-icons">
                                                <div className="tour-push">
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    
                                                    <div class="t-icon">                        
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star-half-alt tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tour-button">
                                                <a href="#" className="tour-btn">Book now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                             <div className="items">
                                <div className="tour-control">
                                    <div className=" tour-image">
                                        <span className="tour-price">#40, 000/night</span>
                                        <img src="images/rooms/hotelroom1land.jpg" alt="tour pic" className='tour-img '/>
                                        <a href="#" class="tour-ct fa-sharp fa-solid fa-cart-shopping"></a>                        
                                    </div>

                                    <div className="tour-content">
                                        <div className="tour-info-supreme">
                                            <div className="tour-info">
                                                <div><h3 className="tour-head">Premium Room</h3></div>

                                                <ul className="tour-list-req">
                                                    <li className="tour-room-req">
                                                        <i class="fa fa-sharp fa-solid fa-border-none tour-icon-req"> 21 ㎡</i>
                                                    </li>

                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-req">
                                                        <i class="fa fa-light fa-user tour-icon2"> max. guests: 2 adults, 1 child ( 0 - 11 )</i>
                                                    </li>
                                                </ul>

                                                <div><p className="tour-text">
                                                        <ReadMore>
                                                           Perfect for business travelers, each Premium Room is outfitted with a king bed, all standard amenities, and perks like a bathrobe and slippers. Enjoy special VIP amenities as you prepare for a meeting in Ikeja, and then unwind with a refreshing drink from the mini refrigerator and a meal from our 24-hour room service. Need to check in with the office? Set up your laptop on the work desk and log in to our free Wi-Fi.
                                                        </ReadMore>
                                                    </p>
                                                </div>

                                                <ul className="tour-room-items">
                                                    <li className="tour-room-li">
                                                        <i class="fa fa-thin fa-wifi tour-pen"><span className='tooltip-span-access'>Free Wifi</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-cast  tour-pen"><span className="tooltip-span-access">Smart Screen TV</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="fa fa-thin fa-vault  tour-pen"><span className="tooltip-span-access">Safe Box</span></i>
                                                    </li>
                                                    <span className="tour-span-list"></span>

                                                    <li className="tour-room-li">                                                        
                                                        <i class="bi bi-wind  tour-pen"><span className="tooltip-span-access">Air Conditioning</span></i>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="tour-icons">
                                                <div className="tour-push">
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    
                                                    <div class="t-icon">                        
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>

                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>
                                                    </div>
                                                    <div class="t-icon">
                                                        <h6><i class="fa-sharp fa-solid fa-star-half-alt tour-icon-control" style = {{color: "#f9c50b"}}></i></h6>                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tour-button">
                                                <a href="#" className="tour-btn">Book now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            

        </div>

    );
}
export default Tour;
