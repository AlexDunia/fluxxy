import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
// import Myshit from './myshit.js'
import mockup from '../Images/mockup.png';
import fluxkitchen from '../Images/fluxkitchen.png';
import orange from '../Images/orange.png';
import fruitsbasket from '../Images/fruitbasket.png';
import watermelon from '../Images/watermelon.png';
import pineapple from '../Images/pineapple.png';
import {data} from '../Data.js'
import Myinputt from '../Myinput.js'
import Card from '../Card.js'
import Mycontext from '../Context.js'
import {  Outlet, Link } from "react-router-dom";
// import {Paragraph} from '../Paragraph.js'
import './Homepage.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const Homepage = () => {
  // const Paragraphh = Paragraph.substring(0, 20)
  // const replay = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam optio accusantium voluptatem consequatur molestias itaque nam iure, reiciendis harum maxime labore fugit iusto nisi ut maiores quas alias quasi dolorum. Magnam exercitationem distinctio incidunt ipsam iusto rerum explicabo voluptas et, error quisquam vero ratione quas, aperiam fuga odio nulla."
  // const replayy = replay.substring(0,10);
  // const [myp, Setmyp] = useState(false)
  // function More() {
  //     Setmyp(!myp)
  // }

  // const {addtocart} = useContext(Myinputt)

   const {items} = useContext(Mycontext)
  //   lets make some onlick readmore for my project. 

  const [allp, Setallp] = useState(2)
  // const forged = Setallp + 3;
  const [myydata, Setmyydata] = useState(true)
  const [post, Setpost] = useState([])

  const mydata = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium tempore doloribus molestias voluptatem! Quisquam voluptas minus vitae atque esse saepe sint quaerat consectetur! Hic aut, accusamus officia maiores sit recusandae quod assumenda voluptas nesciunt mollitia dolor reiciendis dignissimos debitis quo libero id ipsam velit similique! Recusandae magnam ratione eveniet tempore reprehenderit reiciendis, officiis rerum itaque neque cum necessitatibus velit at id quis accusantium quia assumenda ab ipsa fugit repudiandae. Corrupti saepe ipsam excepturi consectetur dignissimos! Repellendus maxime explicabo illo minima ab necessitatibus dolor, exercitationem quae aspernatur aut laudantium quaerat quod ratione reiciendis corporis, adipisci vel fuga ea quasi et repellat temporibus eos aliquam. Neque repellendus quidem totam cumque nostrum rem necessitatibus itaque iure iusto, reiciendis quis aliquid expedita quibusdam ex culpa unde ab quos laboriosam quam eligendi error earum sapiente officia! Sequi ipsum sapiente accusamus iusto perferendis eos. Consequatur nobis blanditiis asperiores laudantium iure ducimus repellendus quasi dolorum, quidem, maxime amet totam illo? Fuga, possimus velit quos iusto similique impedit quam. Animi cupiditate iste tenetur quas, nihil ea dolor illum aperiam similique. Distinctio fuga nobis possimus maiores. Quis omnis similique quo incidunt, voluptatibus reiciendis necessitatibus vero sint recusandae, magni, culpa debitis ad tempora cupiditate non aliquid nobis suscipit sit doloremque?"

  function fetchproducts(){
    // Setdata( allp + 3)
    // forged()
    Setmyydata(!myydata)
  }

  useEffect(() => {
    const fdata = () => {
      // axios.get("https://jsonplaceholder.typicode.com/posts")
     axios.get("http://localhost/Phplessons") 
      .then(res => {
         console.log(res.data)
        //  Setpost(res.data)
        // console.log(res.data[1].title)
        // Setpost(res.data[1].title)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fdata()
  })

  return (
     <> 
     <div className="herobg"> 
    <div className="container">
      <h1> {post} </h1>
      {/* <Myshit/> */}
    
      {/* <h1> {!myp ? replay.substring(0, 20) : replay} </h1> 
      <h2 onClick={More}> Show more </h2>  */}
      <ul>

          <li> <Link to="/products"> Music </Link>  </li> 

           <li> <Link to="/cart"> Cart Page {items.length} </Link>  </li> 

           <li> <Link to="/fm"> Form </Link>  </li> 

           <li> <a href="https://www.goggle.com"> Input </a> </li> 

       </ul>
           
    
      {/* <ul>
          <li>
            <Link to="/Products">Home</Link>
          </li>
        </ul>  */}
     {/* Flex box */}
     <div className="heroflex"> 
        <div className="heroflexh1"> 
           <h1> Discover the industries <br/> <span className="pinktext"> best tigernut </span> and <br/> <span className="pinktext"> fruit juice </span> </h1> 

            {/* {post.map((p) =>{
             const {mysh} = p;
             return (
               <h1> {mysh} </h1> 
             )
           })} */}

           <p> Get it Natural, get it delicious & <br/> do it healthy.  </p>
         </div> 

         <div className="herofleximg">
           <img src={mockup} alt="" className="macbookimage" width="340px"/>
         </div> 

     </div> 
     </div> 
     {/* End of Flex box */}
     </div>

     {/* Second */}

     <div className="second">

     <div className="firstsecondflex"> 

     <div className="square"> 
     </div> 
  
     <div className="orange"> 
     <img src={orange} alt="" className="macbookimage" width="250px"/>
     </div>

     </div> 

     {/* End of firstsecond flex, now time to run the overlay */}

    <div className="secondcontainer"> 
    <div className="secondflex"> 

    <div className="secondfleximg"> 
      <img src={fluxkitchen} alt="" className="macbookimage" width="390px"/>
   </div>

   <div className="secondflextext">
      <h2 className="secondflexh2" > Explore Varieties </h2>
      <p className="secondflexp" > Different flavours and products for <br/> different folks. Do you! </p> 
   </div> 


   </div>
   </div>
   </div> 

    <div className="secondflextext1">
      <h2 className="secondflexh21" > Explore Varieties </h2>
      <p className="secondflexp1" > Different flavours and products for <br/> different folks. Do you! </p> 
   </div> 

   {/* Third side */}
   <div className="productlistbg">

     <div className="productlistalign"> 

     <div class="products"> 
       <h1> Our Products</h1> 
       <p> All our Tiger nut and fruit juice are 100% Natural </p> 
      </div> 

      <div className="productcategories">

        <div> 
        <button> Tiger Nut</button> 
        </div>

        <div> 
        <button> Fruit Juice </button> 
        </div>

        <div> 
        <button> Snacks </button> 
        </div>
        
          </div> 
     <div className="productlistgrid">
     {myydata ? data.slice(0, 4).map((drink) => {
       return (
         <Card  Img={drink.Img} Name={drink.Name} Price={drink.Price} Description={drink.Description}/>
        //  This is simply a prop. The prop takes in values of name and price. Noted. 
       )
      //  const {Img, Name, Price} = drink;
      //  return (
      //    <div className="productlistflex">
      //   <ul className="one_e"> 
      //     <li> {Img} </li> 
      //     <li >  <h1 className="plname"> {Name} </h1> </li>
      //     <li >  <h3 className="plprice"> {Price} </h3> </li>
      //     <button onClick={() => addtocart(Img, Name, Price)}>   add to cart  </button>
      //   </ul> 
      //    </div> 
     }) : data.map((drink) => {
       return (
         <Card  Img={drink.Img} Name={drink.Name} Price={drink.Price} Description={drink.Description}/>
        //  This is simply a prop. The prop takes in values of name and price. Noted. 
       )
       })
     }
    
    </div>
    <p onClick={fetchproducts}> {myydata ? "Show more products" : "Show less products"} </p> 

    </div>
    </div> 
   {/* Fourth Side */}
   <div className="fourthbg"> 

    <div className="fourthfirstflex"> 

     <div> 
       <img src={watermelon} alt="" className="watermelon" width="100px"/>
       <br/> 
       <img src={pineapple} alt="" className="macbookimage" width="100px"/>
     </div> 

      <div className="square2">
      </div> 

    </div> 

      <div clasName="clr"> </div>

      <div className="fourthcontainer">

      <div className="fourthflex"> 

       <div className="fourthflexdiv"> 
         <h3 className="fourthflexh3"> All organic </h3> 
         <p className="fourthflexp"> All our drinks are made without any 
        <br/> synthetic chemicals for preservation. 
        <br/> Quality for us is a top priority. We want 
        <br/> you to have it delicious and healthy. </p>
      </div>
      

      <div className="fruitbasket">
       <img src={fruitsbasket} alt="" className="macbookimage" width="390px"/>
      </div> 
       
      </div>
      </div>
      
   
   </div> 
     
   
     </> 
  )
}

export default Homepage