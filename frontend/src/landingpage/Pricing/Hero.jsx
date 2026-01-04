

export default function HeroPricing() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className="text-2xl font-semibold text-gray-700 ">
         Pricing</h1>
         <h3 className="text-muted mt-3 fs-5">Free equity investment and flat $20 traday  and F&Q trades</h3>
      </div>

      <div className="row p-5 mt-5 border-b fs-6 text-center" >
         <div className="col-4 p-5">
           <img src="Media/pricingEquity.svg"/>
           <h1 className="text-xl">  Free equity delivery</h1>
           <p className="text-muted"> All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
         </div>
          <div className="col-4 p-5">
          <img src="Media/intradayTrades.svg"/>
          <h1 className="text-xl"> Intraday and F&O trades</h1>
          <p className="text-muted"> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
         </div>
          <div className="col-4 p-5">
          <img src="Media/pricing0.svg"/>
          <h1 className="text-xl">  Free direct MF</h1>
          <p className="text-muted"> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
         </div>
      </div>
    </div>
  );
}