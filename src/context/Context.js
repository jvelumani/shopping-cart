import React, { useState } from "react";
import { createContext } from "react";
// import faker from "faker";
// import { firstName } from 'faker-es6/lib/name/firstName';
const Cart = createContext();

const Context = ({children}) => {
    const [product, setProduct] = useState([]);
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProduct(json));
      
    // const products = [...Array(20)].map(()=>({
    //     id:faker.database.uuid(),
    //     name:faker.commerce.productName(),
    //     price:faker.commerce.price(),
    //     image:faker.random.image(),
    //     inStock:faker.random.arrayElement([0,3,5,6,7]),
    //     fastDelivery:faker.datatype.boolean(),
    //     ratings:faker.random.arrayElement([1,2,3,4,5,6])
    // }))
  
    
    return <Cart.Provider>
                 {children}
                  {product.map((prod, index)=>{
                      return <div className='item' key={index}>
                                <p>{prod.title}</p>
                                <img alt="" src={prod.image}/>
                                <i>{prod.price}</i>
                             </div>})
                    }
           </Cart.Provider>
}
export default Context;
