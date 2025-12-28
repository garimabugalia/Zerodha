
import AboutPage from "./landingpage/About/AboutPage"
import Footer from "./landingpage/Footer"
import HomePage from "./landingpage/Home/HomePage"
import Navbar from "./landingpage/Navbar"
import OpenAccount from "./landingpage/OpenAccount"
import PricingPage from "./landingpage/Pricing/PricingPage"
import Signup from "./landingpage/SignUp/Signup"
import SupportPage from "./landingpage/Support/SupportPage"


function App() {
  

  return (
    <>
        <Navbar />
        {/* <AboutPage /> */}
        <HomePage /> 
        <OpenAccount/> 
        <Footer/>
         {/* <PricingPage />
         <Signup />
         <SupportPage /> */}
    </>
  )
}

export default App
