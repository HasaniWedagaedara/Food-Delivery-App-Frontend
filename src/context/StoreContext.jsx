import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios"



// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});
  const url = import.meta.env.VITE_BACKEND_URL;
  const [token,setToken]= useState("");
  const [food_list,setFoodList]=useState([]);


  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}});
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        `${url}/api/cart/remove`,
        { itemId },
        { headers: { token } },
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log("Food list:", response.data.data);
    setFoodList(response.data.data);
  }

  const loadCartData = async (token)=>{
    const response = await axios.post(
      `${url}/api/cart/get`,
      { },
      { headers: { token } },
    );
    setCartItem(response.data.cartData)
  }
  

  //when reload not logout
  useEffect(()=>{

    async function loadData(){
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
