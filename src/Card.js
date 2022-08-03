import React, {useContext, useState} from 'react'
import Mycontext from './Context.js'
// import Myinputt from './Myinput.js'


function Card({ Img, Name, Price, Description}) {

 const {addtocart} = useContext(Mycontext)
   

  return (
     <> 
    <ul className="one_e"> 
          {/* <li> {Img} </li>  */}
          {/* <img src={Img} alt="Best Tigernut in nigeria"/>  */}
          <li> {Img} </li> 
          <li >  <h1 className="plname"> {Name} </h1> </li>
          <li >  <h3 className="plprice"> {Price} </h3> </li>
          {/* <li >  <h3 className="plprice"> {Description} </h3> </li> */}
          {/* <li >  <h3 className="plprice"> {Img} </h3> </li> */}
          <button onClick={() => addtocart(Img, Name, Price, Description)} className="atc">   Add to Cart  </button>
        </ul> 
     </>
  )
}

export default Card