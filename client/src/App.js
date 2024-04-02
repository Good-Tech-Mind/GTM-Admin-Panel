
import { Routes, Route } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import Contact from './components/Pages/Contact';
import Policy from './components/Pages/Policy';
import PageNotFound from './components/Pages/PageNotFound';
import Login from "./components/Auth/Login";
import { Toaster } from 'react-hot-toast';
import Dashboard from "./components/Pages/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./components/Auth/ForgotPassword";
import CreateTeam from "./components/Pages/Admin/CreateTeam";
import CreateProduct from "./components/Pages/Admin/CreateProduct";
import Service from "./components/Pages/Service";
import OurTeam from "./components/Pages/OurTeam";
import Products from "./components/Pages/Products";
import Blogs from "./components/Pages/Blogs";
import About from "./components/Pages/About";
import Director from "./components/Pages/Director";
import CreateService from "./components/Pages/Admin/CreateService";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/service' element={<Service />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/product' element={<Products />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/dashboard' element={<PrivateRoute />} >
          <Route path='/dashboard/user' element={<Dashboard />} />
          <Route path='/dashboard/user/create-category' element={<CreateTeam />} />
          <Route path='/dashboard/user/create-product' element={<CreateProduct />} />
          <Route path='/dashboard/user/create-service' element={<CreateService />} />
        </Route>
        <Route path='/director' element={<Director />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
