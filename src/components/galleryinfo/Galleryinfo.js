import { useState } from 'react';
import './galleryinfo.css';
import Owlcarousel from '../owlcarousel/Owlcarousel';
import Footer from '../footer/Footer';


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read content" : " show less"}
      </span>
    </p>
  );
};


export default function Galleryinfo() {    
  return (
    <div>
         <div className="container">
            <div className="row ">
                <div class="col-md-6">
                    <div class="gall-image">
                        <img src="images/bars/hotelbar4port.jpg" alt="" class="gall-img1" />
                        {/* <img src="images/bars/hotelbar3land.jpg" alt="" class="gall-img2" /> */}
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="gall-heading">
                        <div className="gall-head1"><h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5></div>
                        <div className="gall-head2"><h2>This is Umbrella Academy Resort</h2></div>
                        <div className="gall-text"><p>Quidem ipsam at incidunt rerum corrupti totam. Corrupti quibusdam, vero dolore eius, nemo nobis nesciunt facilis eos non quaerat autem obcaecati, pariatur perspiciatis corporis. Omnis dignissimos dolore eius eum est. Beatae, eos recusandae? Quasi numquam veritatis, distinctio quisquam tenetur quo porro natus.</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, beatae id. Iusto id quo repellat quidem temporibus est, nobis eligendi cupiditate officiis quas sequi voluptatem voluptatum maxime dolor voluptatibus cumque.</p></div>
                        <div className="gall-btn"><button class="third-btn">READ MORE</button></div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="">
            <div className="amenity ">
                <div className="amenity-image">
                    <img src="images/pool/hotelpool1land.jpg" alt="" className='a-image' />
                </div>
                
                <div className="amenity-info">
                    <div className="amenity-head"><h2>Our Amenities</h2></div>
                    <div className="amenity-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione dignissimos mollitia hic, cumque nulla dolor molestiae commodi quas id, magni iure alias vel quibusdam minus quos exercitationem nihil distinctio!</p></div>
                    
                    <div className="amenity-content">
                        <div class="a-icon">                        
                            <h6><i class="fa-solid fa-water-ladder fa-beat icon-control"></i>Swimming pool</h6>
                        </div>

                        <div class="a-icon">
                            <h6><i class="fa fa-dumbbell fa-spin icon-control"></i>Gym & Yogo</h6>                        
                        </div>

                        <div class="a-icon">
                            <h6><i class="fa fa-spa fa-beat-fade icon-control"></i>Spa & Massage</h6>
                        </div>
                        
                        <div class="a-icon">
                            <h6><i class="fa fa-microphone fa-beat-fade icon-control"></i>Driving & Smoking</h6>
                        </div>

                        <div class="a-icon">
                            <h6><i class="fa fa-umbrella fa-flip icon-control"></i>Private Beach</h6>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>

        <div className="container">
            <div className="row ">
                <div className="cafeGuard">
                    <div className="col-md-6">
                        <div className="cafe-image">
                            <img className='cafe-img' src="images/cafe/hotelcafe2port.jpg" alt="" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="cafe-text">
                            <div ><h2 className="cafe-head">Our Restaurant</h2></div>
                            <div ><p className="cafe-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet.Nam accusantium molestiae voluptas?</p></div>

                            <div className="cafe-work">
                                <div className="cafe-item cafe-open">
                                    <div><h2 className="cafe-heading">Igbo Kitchen</h2></div>
                                    <div><p className="cafe-content">                                        
                                            <ReadMore>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem! Recusandae labore ipsam ex laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores nam facilis vitae blanditiis accusamus illum cumque error esse natus.    
                                            </ReadMore> 
                                        </p>
                                    </div>
                                </div>

                                <div className="cafe-item cafe-close">
                                    <div ><h2 className="cafe-heading">Italian Kitchen</h2></div>
                                    <div><p className="cafe-content">                                        
                                            <ReadMore>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem! Recusandae labore ipsam ex laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores nam facilis vitae blanditiis accusamus illum cumque error esse natus.    
                                            </ReadMore>
                                        </p>
                                    </div>
                                </div>

                                <div className="cafe-item cafe-close">
                                    <div ><h2 className="cafe-heading">Yoruba Kitchen</h2></div>
                                    <div><p className="cafe-content">
                                            <ReadMore>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem! Recusandae labore ipsam ex laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores nam facilis vitae blanditiis accusamus illum cumque error esse natus.    
                                            </ReadMore>
                                        </p>
                                    </div>
                                </div>

                                <div className="cafe-item cafe-close">
                                    <div ><h2 className="cafe-heading">Mexican Kitchen</h2></div>
                                    <div><p className="cafe-content">
                                            <ReadMore>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem! Recusandae labore ipsam ex laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores nam facilis vitae blanditiis accusamus illum cumque error esse natus.    
                                            </ReadMore>
                                        </p>
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>
            
                </div>
            </div>
        </div> */}

        {/* <Owlcarousel/>

        <div className="">
            <div className="map-control">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58638.656367692216!2d7.51122327710097!3d6.448408081909062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1683621297720!5m2!1sen!2sng" width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Hotel'></iframe>
            </div>
        </div>
        
        <Footer/>
         */}
    </div>
  )
}
