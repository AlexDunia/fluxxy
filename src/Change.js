import React from 'react'
import {useContext} from 'react'
import {mycontext} from './Context.js'


const Change = () => {
// const box = [];
//    const {name, setName, condition, setCondition} = useContext(mycontext)

//     function handlechange(e){
//       setName(e.target.value)
       
//        console.log(name)
   
//    }


//    function handlesmt(e){
//       e.preventDefault();
//     return  [...box, names()],
//     console.log(names)
//    }

//    [function names([...name]) {
//      return  {id: Date.now(), namme:{name}}
//    }

const {name, setName, condition, setCondition} = useContext(mycontext)


   function handlechange(e){
      setName(e.target.value)
   }

   function handlesmt(e){
     e.preventDefault();
     setCondition(!condition)
   }

  return (
    <> 
    <form onSubmit={handlesmt}>
       <input value={name} onChange={handlechange}/>
    </form>  
    </> 
  )

}

export default Change



    