
import {Link} from 'react-router-dom'
export default function HeroSupport() {
  return (
    <section className="container-fluid bg-blue-400 text-white" >
      <div className="p-5 display:flex justify-content:space-between mx-4">
        <h3 className="text-xl font-semibold text-gray-700 ">Support Portal
        </h3>
        <Link to="" className=' text-white text-xl'>Track Tickets</Link>
      </div>
     <div className='row p-5  '>
      <div className='col-6  '>
        <h1 className='text-2xl'>Search for an answer ot browse  help topics to create a ticket</h1>
        <input className='rounded-2xl bg-white py-3 px-5 w-[100%] text-xl border-none  placeholder:text-black' placeholder='Eg.\How do i activate my zerodha account..'/> <br/>
        <a href=''className="!no-underline text-white hover:text-blue-600 " >Track account opening</a> <br/> 
        <a href='' className="!no-underline text-white hover:text-blue-600">Track segment activation</a> <br/>
        <a href=''className="!no-underline text-white hover:text-blue-600">Intraday margins</a><br/>
        <a href='' className="!no-underline text-white  hover:text-blue-600">Kite user manual</a>
      </div>
      <div className='col-1'></div>
       <div className='col-5  mb-3 '>
        <h1>Featured</h1>
        <ol>
          <li> <a href='' className="no-underline text-white hover:text-blue-600">Current Takeovers</a></li>
          <li> <a href='' className="no-underline text-white hover:text-blue-600">Latest Intraday Leverages</a></li>
        </ol>
     
       
       </div>
     </div>

     
    </section>
  );
} 