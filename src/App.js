/* eslint-disable no-unreachable */
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
  
}

export default App;
