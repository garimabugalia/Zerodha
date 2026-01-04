

export default function Brokerage() {
  return (
       <div className="container">

      <div className="row p- 3 mt-3 border-t fs-6 text-center" >
         <div className="col-8 p-5">
        <a href="" className="no-underline text-inherit text-2xl" style={{textDecoration:"none"}} >Brokerage calculator </a> 
         <ul className="text-left lineHeight-2.5 fs-6 text-muted ">
          <li>Total Brokerage</li>
          <li>Total Statutory Charges (STT, CTT, etc.)</li>
          <li>Exchange Transaction Charges</li>
          <li>GST Amount</li>
          <li>SEBI Charges</li>
          <li>Stamp Duty</li>
          <li>Total Tax & Charges</li>
          <li>Break-even Points (kitne point move hona chahiye to recover cost)</li>
          <li>Net P&L (Profit/Loss After All Charges) </li>
         </ul>
         </div>
          <div className="col-4 p-5">
        <a href="" className="text-2xl" style={{textDecoration:"none"}}> List of charges</a>
         </div>
         
      </div>
    </div>
      
  );
}