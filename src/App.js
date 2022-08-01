import {Routes, Route} from 'react-router-dom'
import Home from './Componnets/Pages/Home/Home';
import Navbar from './Componnets/Pages/Home/Navbar';
import { ToastContainer } from 'react-toastify';
import Login from './Componnets/Register/Login/Login';
import Signup from './Componnets/Register/Signup/Signup';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
