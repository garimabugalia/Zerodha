
import HeroProducts from "./Hero";
import LeftSection from "./Leftsection";
import RightSection from "./Rightsection"
import Universe from "./Universe"
export default function ProductPage() {
  return (
    <div>
      <HeroProducts />
      <LeftSection
        imageURL="Media/kite.png"
        productNmae="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo →"
        learnMore="Learn more →"
        googlePlay="Media/googlePlayBadge.svg"
        appStore="Media/appstoreBadge.svg"
      />
      <RightSection
        imageURL="Media/console.png"
        productNmae="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. "
        learnMore="Learn more →"
      />
      <LeftSection
        imageURL="Media/coin.png"
        productNmae="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. "
        learnMore="Coin →"

        googlePlay="Media/googlePlayBadge.svg"
        appStore="Media/appstoreBadge.svg"
      />

      <RightSection
        imageURL="Media/kiteconnect.png"
        productNmae="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.  "
        learnMore="Kite Connect →"
      />
      <LeftSection
        imageURL="Media/varsity.png"

        productNmae="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. "
        learnMore="Varsity mobile →"
        googlePlay="Media/googlePlayBadge.svg"
        appStore="Media/appstoreBadge.svg"
      />
      <p className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </div>
  );
}