import React from 'react'
import './Co.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)


const Co = () => {
  return (
   <> 

   <div className="cobg">
      <h2> Check out </h2> 
   </div> 

  <div className="cartcontainer"> 

    <div className="mycoform">
       
       <form>

       <div className='coflex'> 

      <div>
      <label for="street address"> First name </label> <br/> <br/> 
       <input className="formname" Name="firstname" type="text"  /> 
       </div> 

       <div> 
          <label for="street address"> Last name </label> <br/> <br/> 
       <input className="formname" Name="firstname" type="text" />
       </div>

       </div> 

      <label for="street address"> Street address </label> <br/> <br/> 
       <input className="formname" id="streetaddress" Name="firstname" type="text" placeholder=" House number"/> <br/>
       <input className="formname" Name="firstname" type="text" placeholder="Street Name" /> <br/>
       <input className="formname" Name="firstname" type="text" placeholder="Nearest recognisable Bus-stop/ Area around" />  <br/>

      <label for="state"> State </label> <br/> <br/> 
       <input className="formname" id="state" Name="firstname" type="text" placeholder=" House number"/> <br/>

       <label for="phone"> Phone </label><br/> <br/> 
       <input className="formname" id="phone" Name="firstname" type="text" placeholder=" House number"/> <br/>

       <label for="email"> Email </label> <br/> <br/> 
       <input className="formname" id="email" Name="firstname" type="text" placeholder=" House number"/> <br/>

       <label for="note"> Note (Optional) </label> <br/> <br/> 
       <input className="formname" id="note" Name="firstname" type="text" placeholder=" House number"/> <br/>

       </form> 
       {/* <Form  className="formname" Name="firstName" type="text" placeholder="First Name" value="Value" handleClick={handleClick}/> 
          
           <Form  className="formname" Name="lastName" type="text" placeholder="Last Name" value="Value" handleClick={handleClick}/>  */}
    </div>

    </div>
    </>
  )
}

export default Co