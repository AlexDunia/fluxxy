import React, {useState} from 'react'
import { createContext } from 'react'

 const Mycontext = createContext({})

 export function Myinputt({children})  {
   const [items, setItems] = useState([])
    const addtocart = (Img, Name, Price, Description, Delete) => {
    setItems((prevState) => [...prevState, {Img, Name, Price, Description, Delete}]); 
    console.log(items)
    } 
    // The code above means we need to push whatever we had on the previous to the name and value object. 

    return (
    <> 
    {/* <mycontext.Provider value={{name, setName, condition, setCondition}}>  */}
    <Mycontext.Provider value={{items, addtocart}}> 
    {children}
    {/* {condition ? <Change/> : <Result/> } */}
    </Mycontext.Provider>
    </>
  )
  } 

  export default Mycontext

// export const myprovider =

// lets break it down, first we need context api then put the xonetxt api in the provider, then make the provider dynamic by simply wrapping it in or app incase it is triggered anywhere, then we need to add it to the required places. 

// first set up the link. Luckily we aready have a cart link and we will be making use of that for now. 
// ?then we need to work on our my provider 
// After my provider, we need to work on cart. 

