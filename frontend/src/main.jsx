
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './landingpage/Home/HomePage.jsx'
import Signup from './landingpage/SignUp/Signup.jsx'
import AboutPage from './landingpage/About/AboutPage.jsx'
import PricingPage from './landingpage/Pricing/PricingPage.jsx'
import ProductPage from './landingpage/Products/ProductPage.jsx'
import SupportPage from './landingpage/Support/SupportPage.jsx'
import Navbar from './landingpage/Navbar.jsx'
import Footer from './landingpage/Footer.jsx'
import NotFound from './landingpage/NotFound.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>)