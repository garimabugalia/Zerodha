

export default function RightSection({ imageURL, productNmae, productDesription, learnMore }) {
  return (

    <div className="container p-5">
      <div className="row">


        <div className="col-6 p-5 mt-3">
          <h1>{productNmae}</h1>
          <p>{productDesription}</p>
          <div  className="pt-2">

            <a href={learnMore}   className="text-blue-500 hover:text-gray-900 transition-colors font-medium flex items-center gap-1">Learn More</a>
          </div>
           </div>
          <div className="flex flex-wrap items-center col-6">
            <img src={imageURL} className="w-full h-auto object-contain"  />
          </div>

       
      </div>

    </div>
  );
}