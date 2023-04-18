import './grid.css'

export default function Grid() {
  return (
    <div>
        <div className="container">
            <div className="row gridGuard">
                <div className="col"></div>

                <div className="col-md-10 gridSupport">
                    <div className="row">
                        <div className="col-md-8 grid-left-col">
                            <div className="grid-left-item1">
                                <label for="exampleInputEmail1">Check-in</label>
                                <input type="date" class="form-control " id="exampleInputEmail1" aria-describedby="Help"></input>
                            </div>
                            <div className="grid-left-item2">
                                <label for="exampleInputEmail1">Check-out</label>
                                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="Help"></input>
                            </div>
                        </div>

                        <div className="col-md-4 grid-right-col">
                            <div className="grid-right-item1">
                                <label for="exampleInputEmail1">Adults</label>
                                <input type="number" class="form-control grid-right-input" placeholder='0' id="exampleInputEmail1" aria-describedby="Help"></input>
                            </div> 
                            <div className="grid-right-item2">
                                <label for="exampleInputEmail1">Children</label>
                                <input type="number" class="form-control grid-right-input" placeholder='0' id="exampleInputEmail1" aria-describedby="Help"></input>
                            </div>
                            <div className="gridBtn">
                                <button className="secondBtn" type='submit'>Submit</button>         
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col"></div>
            </div>
        </div>
    </div>
  )
}
