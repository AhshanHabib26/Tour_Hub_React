import {Routes, Route} from 'react-router-dom'
import Home from './Componnets/Pages/Home/Home';
import Navbar from './Componnets/Pages/Home/Navbar';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
