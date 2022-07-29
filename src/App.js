import {Routes, Route} from 'react-router-dom'
import Home from './Componnets/Pages/Home/Home';
import Navbar from './Componnets/Pages/Home/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
