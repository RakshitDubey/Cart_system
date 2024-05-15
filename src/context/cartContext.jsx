
import { createContext, useState } from "react";

export const CartContext=createContext(null)

export const CartProvider=(props)=>{
    const[items,setitems]=useState([])

    return(
        <CartContext.Provider value={{items,setitems}}>
            {props.children}

        </CartContext.Provider>
    )

}