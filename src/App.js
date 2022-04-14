
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound-404/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/services' element={<Services></Services>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/services/:serviceID' element={<ServiceDetails></ServiceDetails>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
