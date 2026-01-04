

export default function Awards() {
  return (
    <div className="continer mt-5">
      <div className="row">
             <div className="col-6 p-5">
                <img src="Media/largestBroker.svg" alt="Awards Image" className="img-fluid"/>
             </div>
             <div className="col-6 p-5 mt-3">
                 <h1>Largest stock broker in India</h1>
                 <p className="mb-5">2+ million Zerodha clienys contribute to over 15 % all of retail order volumes in india daily by trading and investing in: </p>

                 <div className="row mb-5">
                       <div className="col-6">
                             <ul>
                                <li>
                                    <p>Future and options</p>
                                </li>

                                <li>
                                    <p>Commodity derivatives</p>
                                </li>

                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                              </ul>
                      </div>
                       <div className="col-6">
                              <ul>
                                  <li>
                                      <p>Stocks and IPOs</p>
                                  </li>

                                  <li>
                                      <p>Direct mutual fundas</p>
                                  </li>

                                  <li>
                                      <p>Bonds and Govt. Securities</p>
                                  </li>
                              </ul>
                       </div>
                 </div>
                  <img src="Media/pressLogos.png"  style={{width:"90%"}}/>
                  
             </div>
      </div>
     
    </div>
  );
}