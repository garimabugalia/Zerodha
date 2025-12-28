

export default function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extand your trading and investment even further with our partner platforms</p>


        <div className=" col-4 p-3 mt-5">
          <img src="Media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className=" col-4 p-3 mt-5">
          <img src="Media/streakLogo.png" className="w-[30%]" />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>

        <div className=" col-4 p-3 mt-5">
          <img src="Media/sensibullLogo.svg" />
          <p className="text-small text-muted">Options trading platform</p>

        </div>


        <div className=" col-4 p-3 mt-5">
          <img src="Media/zerodhaFundhouse.png" className="w-[35%]" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className=" col-4 p-3 mt-5">
          <img src="Media/goldenpiLogo.png" />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>

        <div className=" col-4 p-3 mt-5">
          <img src="Media/dittoLogo.png"  className="w-[28%]"/>
          <p className="text-small text-muted">Options trading platform</p>

        </div>

        <button style={{ width: "20%", margin: " 0 auto" }} className="p-2 btn btn-primary fs-5 mb-5 ">SignUp Now</button>

      </div>
    </div>


  );
}