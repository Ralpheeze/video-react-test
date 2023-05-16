import './footer.css';

export default function Footer() {
  return (
    <div>
        <footer>
            <div className="container-fluid">
                <div className="row p-5 foot-control">
                    <div className="col-md-3 ">
                        <div className="pay-control">
                            {/* <div className="pay-image">
                                <img src="" alt="" className='pay-img'/>
                            </div> */}
                            <div><p className="pay-text1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates id repudiandae quia ipsum eligendi mollitia non earum reiciendis consequuntur laudantium.</p></div>
                            
                            <div><p className="pay-text2">Accepted payment Methods</p></div>

                            <div className="pay-image">
                                <img src="images/pay-logos/amex.png" alt="" className="pay-img" />
                                <img src="images/pay-logos/mastercard.png" alt="" className="pay-img" />
                                <img src="images/pay-logos/paypal.png" alt="" className="pay-img" />
                                <img src="images/pay-logos/visa2.png" alt="" className="pay-img" />
                            </div>
                        </div>             
                    </div>

                    <div className="col-md-3">
                        <div className="foot-info1">
                            <div className=""><h3 className="foot-head">Recent news</h3></div>

                            <ul className='f-list' >
                                <li className='foot-list'>Our Secret Island Boat Tour Is Just for You</li>
                                <li className='foot-list'>Chill and Escape in Our Natural Shelters</li>
                                <li className='foot-list'>September in Umbrella Academy</li>
                                <li className='foot-list'>Live Music Concerts at Luviana</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="foot-info1">
                            <div className=""><h3 className="foot-head">For Customers</h3></div>

                            <ul className='f-list' >
                                <li className='foot-list'>About Luviana</li>
                                <li className='foot-list'>Customer Care/Help</li>
                                <li className='foot-list'>Corporate Accounts</li>
                                <li className='foot-list'>Financial Information</li>
                                <li className='foot-list'>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="foot-info1">
                            <div className=""><h3 className="foot-head">Contact Us</h3></div>

                            <ul className='f-list' >
                                <li className='foot-list'>3015 Grand Ave, Coconut Grove, Merrick Way FL 123456</li>
                                <li className='foot-list'><i class="fa fa-envelope foot-icon"></i>demoexampleAgmail.com</li>
                                <li className='foot-list'><i class="fa fa-phone-alt foot-icon"></i>09020474648</li>
                                <li className='foot-list'><i class="fa fa-phone-alt foot-icon"></i>070346782920</li>
                                <li className='foot-list'><i class="fa fa-comments foot-icon"></i>24 / 7 Customer Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
