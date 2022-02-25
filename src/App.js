
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './page/Home';
import Header from './components/Header.js'
import './App.css';
import About from './page/About';
import Products from './page/Products';
import  Contacts from './page/Contacts'
import Onlain from './page/Onlain';
import Reviews from './page/Reviews';
import Terms from './page/Terms';
import Jobs from './page/Jobs';
import Programm from './components/programm/Programm';

function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
 <Route path='/' element={<Home/>}/>
   <Route path='about' element={<About/>} />
   <Route path= '/contacts' element={<Contacts/>}/>
   <Route path= '/products' element={<Products/>}/>
<Route path= '/onlain' element={<Onlain/>}/>
<Route path= '/reviews' element={<Reviews/>}/>
<Route path= 'terms' element={<Terms/>}/>
<Route path='jobs' element={<Jobs/>}/>
<Route path='programm' element={<Programm/>}/>
 </Routes>
</BrowserRouter>
  );
}

export default App;
