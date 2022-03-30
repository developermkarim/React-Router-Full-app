
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import EveryMeal from './Components/EveryMeal';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Header from './Components/Resturant/Header';
import MealsDetails from './Components/Resturant/MealsDetails';
import Resurant from './Components/Resturant/Resurant';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/allMealsTo' element={<Resurant></Resurant>}></Route>
       <Route path='/allMealstDetails/:MealsID' element={<MealsDetails></MealsDetails>}></Route>
       <Route path='/ContactUs' element={<Contact></Contact>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
