import React from 'react'
import {useContext} from 'react'
import {mycontext} from './Context.js'


const Change = () => {

   const {name} = useContext(mycontext)


  return (
    <> 
    <h1> {name} </h1>
    </> 
  )

}

export default Change



    