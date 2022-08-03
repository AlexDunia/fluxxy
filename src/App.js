import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Homepage/Homepage.js'
import Products from './Products/Products.js';
import Cart from './Cart/Cart.js';
import Co from './Co/Co.js';
import Input from "./Myinput.js"
import {Myinputt} from './Context.js'
// import './App.css';



function App() {
  return (
    <> 
    <Myinputt> 
    <BrowserRouter> 
    <Routes>
       <Route index element={<Home/>}/>
      <Route path="/products" element={<Products/>}/> 
      <Route path="/cart" element={<Cart/>}/> 
      <Route path="/fm" element={<Co/>}/> 
      <Route path="https://www.youtube.com/" element={<Input/>}/> 
    </Routes> 
    </BrowserRouter>
    </Myinputt>
    </> 
  )
}

export default App;
