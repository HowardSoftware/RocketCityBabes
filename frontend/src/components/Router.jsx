import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Reviews from "../pages/Reviews";
import ContactUs from "../pages/ContactUs";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
}