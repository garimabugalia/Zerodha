


export default function Price() {
  return (
        <div className="continer m-5">
            <div className="row p-5 ">
              <div className="col-4">
                <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                 <p>Unbeatable pricing offers low brokerage, transparent costs, and zero hidden charges,
                   helping investors keep more profits.</p>
                    <a href="" style={{textDecoration:"none"}}> See Pricing <i class="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="col-2"></div>
              <div className="col-6">
                <div className="row text-center mb-5">
                  <div className="col p-3 border">
                    <h1 className="mb-3 fs-2">$0</h1>
                    <p>Free equity delivery and <br/> direct mutual funds </p>
                  </div>
                  <div className="col p-3 border ">
                    <h1 className="mb-3 fs-2">$20</h1>
                    <p>Intraday and F&O </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
}