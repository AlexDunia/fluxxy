import React from 'react'
import './Products.css'
import Beetroot from '../Images/beetroot2.png';
import {suggestions} from '../Suggestions.js';
import { Outlet, Link } from "react-router-dom";

const Products = () => {
  return (
    <> 
    <div className="productbody"> 
    <div className="productcontainer"> 

    <div className="productsflex">

      <div className="productimage"> 
     <img src={Beetroot} width="250px" />
      </div>

      <div className="productdetails"> 

      <h2> Fluxxy Frutties Heart beet </h2> 
      <p><span className="category"> Category: </span> Fruit Juice</p>  
      <p><span className="ingredients"> Ingredients: </span> Beetroot, Watermelon, Pineapple, Apple. </p> 
      <h3> N1,000.00 </h3> 
      {/* Now lets do three slots and wrap them around a button. This should get the work done. */}
      {/* Do flex box for each item */}
      
      <div className="btn2flex">
        
       {/* <div className="control"> 
       
        <button className="minus">
        <p>  2 </p> 
        </button> 

        <button className="digit">
        <p>  2 </p> 
        </button> 
       

        <button className="plus">
        <p>  2 </p> 
        </button> 

        </div>  */}
        

        <div className="cartclick">
          <button className="minus1"> - </button> 
          <button  className="digit1"> 1 </button> 
          <button  className="plus1"> + </button> 
        </div>


        <div className="secondcartclick">
          <button> Add to cart </button> 
        </div>

        </div> 
      </div>


    </div> 
    </div>
    </div>

    {/* second layer */}

    <div className="suggestionlayer">

      {/* <div className="productlistbg"> */}
     <div className="productlistgrid">
     {suggestions.map((suggest) => {
       const {Img, Name, Price, Cartcontrol} = suggest;
       return (
         <div className="productlistflex">
        <ul className="one_e"> 
          <li> {Img} </li> 
          <li >  <h1 className="plname"> {Name} </h1> </li>
          <li >  <h3 className="plprice"> {Price} </h3> </li>
          <li>  {Cartcontrol} </li> 
        </ul> 
         </div>   
       )
     })
     }
    </div> 
    </div> 
    {/* </div>  */}
    

    </>
  )
}

export default Products