import React, {useContext, useState} from 'react'
import Mycontext from '../Context.js'
import './Cart.css'
import Noodles from '../Images/noodles.png'
// import Doughnut from '../Images/Doughnut.png'
// import Sharwarma from '../Images/sharwarma.png'
// import Meatpie from '../Images/Meatpie.png'
// import Smallpuffs from '../Images/smallpuffs.png'
// import Popcorn from '../Images/popcorn.png'
// import Beetroot from '../Images/beetroot.png'
// import Ginger from '../Images/ginger.png'
// import Carrot from '../Images/carrot1.png'
// import Coconut from '../Images/coconut.png'
// import Zobo from '../Images/zobo.png'
// import Immunity from '../Images/immunity.png'

const Cart = () => {

  const {items} = useContext(Mycontext)

return (
  <> 
  <div className="cartcontainer"> 
    <div className="cflex"> 
    <div className="pimgc"> <h4> Product img </h4>  </div> 
    <div className="dc"> <h4> Description </h4>  </div> 
    <div className="pc"> <h4> Price </h4>  </div> 
    <div className="dec"> <h4> Delete </h4>  </div> 

    </div> 

    <hr/>
    <br/> 
    <br/> 

   {items.map((item) => {
     return(
      <div> 

      <div className="cflex"> 

      <div className="pimgc"> 
      <h4> {item.Img} </h4>
      </div> 

      <div className="dc">  
      <h4> {item.Name} </h4>
      <div className="dcdescription"> 
       <h4>{item.Description}</h4>
       </div> 
      </div>

     <div className="pc"> 
     <h4>{item.Price}</h4>
     </div> 

     {/* <div className="pc"> 
     <h4>{item.Description}</h4>
     </div>  */}

     <div className="dec"> 
     <h4> X </h4>
     </div> 

     </div> 
<hr/>
    <br/> 
    <br/> 
    <br/>
     </div> 

  
     )
     
}

)


}
   
</div>

</>
)
}

export default Cart 


