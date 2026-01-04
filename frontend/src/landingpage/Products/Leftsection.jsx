

export default function LeftSection({ imageURL, productNmae, productDesription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-1 p-5"></div>
        <div className="col-6 p-5">
          <h1>{productNmae}</h1>
          <p>{productDesription}</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 text-blue-500 font-medium">
            <a href={tryDemo} className="hover:text-gray-900 transition-colors flex items-center gap-1">Try Demo</a>
            <a href={learnMore} className="hover:text-gray-900 transition-colors flex items-center gap-1">Learn More</a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href={googlePlay} className="transition-transform hover:scale-105"><img src="Media/googlePlayBadge.svg" /></a>
            <a href={appStore} className="transition-transform hover:scale-105"><img src="Media/appstoreBadge.svg" /></a>
          </div>

        </div>
      </div>

    </div>
  );
}