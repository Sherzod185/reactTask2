import React from "react";
import apple from "../assets/imgs/product5.jpg"
import galaxy from "../assets/imgs/product6.jpg"
import galaxy4 from "../assets/imgs/product7.jpg"
import gs8 from "../assets/imgs/product8.jpg"
const watch=[
 {
  img:apple,
  name:"Apple Watch",
  price:"$499"
 }, 
 {
  img:galaxy,
  name:"Galaxy Watch",
  price:"$299"
 }, 
 {
  img:galaxy4,
  name:"Galxy Watch4",
  price:"$399"
 }, 
 {
  img:gs8,
  name:"GS8 Watch",
  price:"$499"
 },

]

const Main =()=>{ 
  return <main className="mt-5 mb-5">
  <div className="container">
     <h2>Product</h2>
     <div className="col-12 d-flex mt-3  justify-content-between">

      {
        watch.map((product)=>{
          return   <div class="ml-3 card " style={{width:"17rem"}}>
          <img style={{height:"70%"}} src={product.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">  {product.name}</h5>
            <span class="card-text">Price: {product.price}</span>
            
          </div>
        </div>
        })
      }

     </div>
  </div>
</main>
}
export default Main;