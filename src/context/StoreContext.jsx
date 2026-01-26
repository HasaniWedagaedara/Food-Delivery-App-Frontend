import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem,setCartItem]= useState({});

    const addToCart=(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        } else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromcart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    })
    const contextValue ={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromcart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;