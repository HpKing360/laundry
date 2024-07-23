import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import DryCleaning from "./components/DryCleaning";
import EmergencyService from "./components/EmergencyService";
import Footer from "./components/Footer";
import Home from "./components/Home";
import IronAndFold from "./components/IronAndFold";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Services from "./components/Services";
import WashAndFold from "./components/WashAndFold";
import WashAndIron from "./components/WashAndIron";
import { CartProvider } from "react-use-cart";
import Dashboard from "./components/UserDashboard/Dashboard";
import Settings from "./components/UserDashboard/Settings";
import ProfilePic from "./components/UserDashboard/ProfilePic";
import ChangePwd from "./components/UserDashboard/ChangePwd";
import OrderDetails from "./components/UserDashboard/OrderDetails";
import DeliveryLogin from "./components/DeliveryDashboard/Login";
import DeliveryDashboard from "./components/DeliveryDashboard/Dashboard";
import DeliveryOrderDetails from "./components/DeliveryDashboard/OrderDetails";
import DeliverySettings from "./components/DeliveryDashboard/Settings";
import DeliveryProfilePic from "./components/DeliveryDashboard/ProfilePic";
import DeliveryChangePwd from "./components/DeliveryDashboard/ChangePwd";
import Map from "./components/map/Map";
import ScrollToTop from "./components/ScrollToTop";
import CompanyDetails from "./components/CompanyDetails";
import OtherLaundryWebsites from './components/OtherLaundryWebsites';
import ServicePage from './components/ServicePage'; // Import the new component

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/WashAndIron" element={<WashAndIron />} />
            <Route exact path="/WashAndFold" element={<WashAndFold />} />
            <Route exact path="/IronAndFold" element={<IronAndFold />} />
            <Route exact path="/DryCleaning" element={<DryCleaning />} />
            <Route exact path="/EmergencyService" element={<EmergencyService />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/map" element={<Map />} />
            <Route exact path="/customer/settings/" element={<Settings />} />
            <Route exact path="/customer" element={<Dashboard />} />
            <Route exact path="/customer/dashboard/:id" element={<OrderDetails />} />
            <Route exact path="/customer/profile-picture" element={<ProfilePic />} />
            <Route exact path="/customer/password" element={<ChangePwd />} />
            <Route exact path="/delivery-login" element={<DeliveryLogin />} />
            <Route exact path="/delivery/settings/" element={<DeliverySettings />} />
            <Route exact path="/delivery" element={<DeliveryDashboard />} />
            <Route exact path="/delivery/dashboard/:id" element={<DeliveryOrderDetails />} />
            <Route exact path="/delivery/profile-picture" element={<DeliveryProfilePic />} />
            <Route exact path="/delivery/password" element={<DeliveryChangePwd />} />
            <Route exact path="/other-laundry-websites" element={<OtherLaundryWebsites />} />
            <Route exact path="/company-details" element={<CompanyDetails />} />
            <Route exact path="/service/:service" element={<ServicePage />} /> {/* Add this route */}
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
