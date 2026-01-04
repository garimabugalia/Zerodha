  

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Stast() {
  return (
      <div className="continer p-5">

        <div className="row">
          <div className="col-6 p-5">

            <h1 className='fs-3 mb-5'>Trust with confidence</h1>
            <h2 className='fs-4'>Customer-first always</h2>
            <p  className='text-muted'>That's why 1.3+ crore custmore trust Zerodha  with 3.5+ lakh crores worth of equity investments.</p>

            <h2 className='fs-4'>No spam or gimmicks</h2>
            <p className='text-muted'>Zerodha offers transparent, low cost investing with powerful tools, honest pricing, educational resources, and reliable platforms for wealth creation nationwide.</p>

            <h2 className='fs-4'>The Zerodha universe</h2>
            <p className='text-muted'>The Zerodha universe connects trading, investing, education, and technology into a simple, transparent ecosystem built for long term wealth creation.</p>

            <h2 className='fs-4'>Do better with Zerodha</h2>
            <p className='text-muted'>Do better with Zerodha means investing smarter with transparent pricing, reliable tools, and long-term focus—no noise, no pressure, just clarity.</p>
          </div>


          <div className="col-6 p-5">
            <img src="Media/ecosystem.png" style={{width:"90%"}}/>

            <div className='text-center mb-5'>
              <a href="" className="mx-5" style={{textDecoration:"none"}}>   Exploer our products <i class="fa-solid fa-arrow-right"></i></a>
               <a href="" style={{textDecoration:"none"}}> Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      
  );
}