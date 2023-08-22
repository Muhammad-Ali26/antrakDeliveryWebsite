// @ts-nocheck
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Pages/Home/Navbar';
import HeroSection from './Components/Pages/Home/HeroSection'
import WhoWeAre from './Components/Pages/Home/WhoWeAre';
import ServiceSection from './Components/Pages/Home/ServiceSection';
import GetApp from './Components/Pages/Home/GetApp';
import RegisterNow from './Components/Pages/Home/RegisterNow';
import LetTalk from './Components/Pages/Home/LetTalk';
import Footer from './Components/Pages/Home/Footer';
import Questions from './Components/Pages/Home/Questions';
import { ChakraProvider } from '@chakra-ui/react';
import { Login } from './Components/Pages/Login/Login';
import { Signup } from './Components/Pages/Login/Signup';
import { SendParcel } from './Components/Pages/SendParcel/SendParcel';
import { ReceipentAddress } from './Components/Pages/SendParcel/ReceipentAddress';
import { SelectVehicle } from './Components/Pages/SendParcel/SelectVehicle';
import { PackageDetails } from './Components/Pages/SendParcel/PackageDetails';
import Payment from './Components/Pages/SendParcel/Payment';
import { OrderConfirmed } from './Components/Pages/SendParcel/OrderConfirmed';
import UserDetailsDashboard from './Components/Pages/UserDetailsDashboard/UserDetailsDashboard';
import OrderHistory from "./Components/Pages/UserDetailsDashboard/OrderHistory"
import CurrentOrder from './Components/Pages/UserDetailsDashboard/CurrentOrder';
import OrderTracking from './Components/Pages/UserDetailsDashboard/OrderTracking';
import Settings from './Components/Pages/UserDetailsDashboard/Settings';
import CardDetails from './Components/Pages/UserDetailsDashboard/CardDetails';
import AddNewCard from './Components/Pages/UserDetailsDashboard/AddNewCard';
import SavedAddress from './Components/Pages/UserDetailsDashboard/SavedAddress';
import AddNewAddress from './Components/Pages/UserDetailsDashboard/AddNewAddress';
import RestrictedItems from './Components/Pages/UserDetailsDashboard/RestrictedItems';
import { ToastContainer } from 'react-toastify';
import VerifyEmail from './Components/Pages/Login/VerifyEmail';
import ForgotPassword from './Components/Pages/Login/ForgotPassword';
import VerifyOtp from './Components/Pages/Login/VerifyOtp';
import ResetPassword from './Components/Pages/Login/ResetPassword';
import ResendOtp from './Components/Pages/Login/ResendOtp';
import PickupAddress from './Components/Pages/SendParcel/PickupAddress';
import CancelBooking from './Components/Pages/UserDetailsDashboard/CancelBooking';
import UpdateProfile from './Components/Pages/Login/UpdateProfile';
import UpdatePassword from './Components/Pages/Login/UpdatePassword';
import Test from './Components/Pages/UserDetailsDashboard/Test';

function App() {
  return (
    <>
      <ToastContainer />
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path='/' element={<>
              <Navbar />
              <HeroSection />
              <WhoWeAre />
              <ServiceSection />
              <GetApp />
              <RegisterNow />
              <Questions />
              <LetTalk />
              <Footer /></>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route exact path='/send_parcel' element={<SendParcel />} />
            <Route path='/recepient_address' element={<ReceipentAddress />} />
            <Route path='/select_vehicle' element={<SelectVehicle />} />
            <Route path='/package_details' element={<PackageDetails />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/order_confirmed' element={<OrderConfirmed />} />
            <Route path='/user_details_dashboard' element={<UserDetailsDashboard />} />
            <Route path='/order_history' element={<OrderHistory />} />
            <Route path='/current_order' element={<CurrentOrder />} />
            <Route path='/order_tracking' element={<OrderTracking />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/card_details' element={<CardDetails />} />
            <Route path='/add_new_card' element={<AddNewCard />} />
            <Route path='/saved_address' element={<SavedAddress />} />
            <Route path='/add_new_address' element={<AddNewAddress />} />
            <Route path='/restricted_items' element={<RestrictedItems />} />
            <Route path='/verify_email' element={<VerifyEmail />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/verify_otp' element={<VerifyOtp />} />
            <Route path='/reset_password' element={<ResetPassword />} />
            <Route path='/resend_otp' element={<ResendOtp />} />
            <Route path='/pickup_address' element={<PickupAddress />} />
            <Route path='/cancel_booking' element={<CancelBooking />} />
            <Route path='/update_profile' element={<UpdateProfile />} />
            <Route path='/update_password' element={<UpdatePassword />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </Router>
      </ChakraProvider>

    </>
  )
}

export default App;
