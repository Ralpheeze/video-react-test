import './home.css'

export default function Home() {
  return (
    <div>
        <div className='sec1'>
            <video autoPlay loop muted plays-inline id="myVideo">
                <source src="videos/AI-trance1land.mp4" type="video/mp4"/>
            </video>

            {/* <div className='image'>
                <img src="images/hotelfront2land.jpg" alt="" className='slide image-img'/>
            </div>

            <div className='image-item'>
                <img src="images/hotelbar1.jpg" alt="" className='slide active item-img' onClick= {img('images/hotelbar1.jpg')} />
                <img src="images/hotelbar2.jpg" alt="" className='slide item-img' onClick= {img('images/hotelbar2.jpg')} />
                <img src="images/hotellobby1.jpg" alt="" className='slide item-img' onClick= {img('images/hotellobby1.jpg')} />
            </div> */}
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-col">
                        <div className="contTitle">Welcome to Umbrella Academy</div>

                        <div className="contContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo, alias laborum molestiae iusto ducimus delectus voluptas asperiores amet dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at fugit id illo eveniet ipsum, eius quidem vero corporis modi?</div>

                        <div className="contBtn ">
                            <div className="main-Btn">SEE ROOMS & RATES
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
