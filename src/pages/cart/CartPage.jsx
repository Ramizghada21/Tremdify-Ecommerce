import React, { useContext, useEffect, useState } from "react";
// import myContext from '../../context/data/myContext';
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  decreamentQuantity,
  deleteFromCart,
  increamentQuantity,
} from "../../redux/cartSlice";
import toast from "react-hot-toast";
import BuyNowModel from "../../components/buyNowModel/BuyNowModel";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import {fireDb} from "../../firebase/FireBaseConfig"
import { Navigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart successfully!");
  };
  const handleIncreament = (id) => {
    dispatch(increamentQuantity(id));
  };
  const handleDecreament = (id) => {
    dispatch(decreamentQuantity(id));
  };
  useEffect(() => {
    // Add logging to confirm updates
    console.log("Updated cartItems:", cartItems);
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      console.log("Cart saved to localStorage");
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [cartItems]);

  // Card items total
  const cartItemsTotal=cartItems.map(item => item.quantity).reduce((prevVal,currVal)=>prevVal + currVal,0)
  const cartTotal=cartItems.map(item => item.price * item.quantity).reduce((prevVal,currVal)=>prevVal+currVal,0);
  
  // TODO:Buy Now Function
  const user = JSON.parse(localStorage.getItem('users'))
  // Address Info State 
  const [addressInfo,setAddressInfo]=useState({
    name:"",
    address:"",
    pincode:"",
    mobileNumber:"",
    time:Timestamp.now(),
    date:new Date().toLocaleString(
      "en-US",
      {
        month:"short",
        day:"2-digit",
        year:"numeric",
      }
    )
  })
  const buyNowFunction = () =>{
    if(addressInfo.name === "" || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "")
    {
      return toast.error("All fields are required...");
    }
    const orderInfo = {
      cartItems,
      addressInfo,
      email:user.email,
      userid:user.uid,
      status:"confirmed",
      time:Timestamp.now(),
      date:new Date().toLocaleString(
        "en-US",
        {
          month:"short",
          day:"2-digit",
          year:"numeric",
        }
      )
    }
    try {
      const orderRef = collection(fireDb,'order')
      addDoc(orderRef,orderInfo);
      setAddressInfo({
        name:"",
        address:"",
        pincode:"",
        mobileNumber:"",
      })
      toast.success("Order Placed SuccessFully");
    } catch (error) {
      console.log(error);      
    }
  }
  return (
    <Layout>
      <div className="cantainer mx-auto px-4 max-w-7xl lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form
            action=""
            className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          >
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2>Items in your Shopping Cart</h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.length > 0 ? <>
                  {cartItems.map((item, i) => {
                  const {
                    id,
                    title,
                    price,
                    productImageUrl,
                    quantity,
                    category,
                  } = item;
                  return (
                    <div key={i} className="">
                      <li className="flex py-6 sm:py-6">
                        <div className="flex flex-shrink-0">
                          <img
                            src={productImageUrl}
                            alt={"images"}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <h3 className="font-semibold text-black">
                                    {title}
                                  </h3>
                                </h3>
                              </div>
                              <div className="mt-1 flex text-sm">
                                <p className="text-sm text-gray-500">
                                  {category}
                                </p>
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500">
                                  {price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex ">
                          <button onClick={()=>handleDecreament(id)} type="button" className="h-7 w-7">
                            -
                          </button>
                          <input
                            type="text"
                            className="mx-1 h-7 w-9 rounded-md border text-center"
                            value={quantity}
                          />
                          <button
                          onClick={()=>handleIncreament(id)}
                            type="button"
                            className="h-7 w-7 items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-6 flex text-sm">
                          <button
                            onClick={() =>deleteCart(item)}
                            type="button"
                            className="flex items-center space-x-1 px-2 py-1 pl-0"
                          >
                            <span className="text-xs font-medium text-red-500">
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}</> : <>
                <h1 className="text-gray-500 text-2xl mt-32 text-center">Your Cart page is empty...</h1>
                </>}
              </ul>
            </section>
            {/* Order summery */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className="border-b border-gray-200 px-4 py-2 text-lg font-medium text-gray-900 sm:p-4"
              >
                Price Details
              </h2>
              <div className="px-4 py-6 sm:p-6">
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">Price ({cartItemsTotal})</span>
                  <span className="text-gray-900 font-medium">₹ {cartTotal}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">Discount</span>
                  <span className="text-green-600 font-medium">- ₹ 3,431</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">Delivery Charges</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200 mt-4 pt-4">
                  <span className="text-lg font-medium text-gray-900">
                    Total Amount
                  </span>
                  <span className="text-lg font-medium text-gray-900">
                    ₹ {cartTotal}
                  </span>
                </div>
              </div>
              <div className="px-4 pb-4 sm:px-6">
                <button
                  type="button"
                  className="w-full rounded-md bg-rose-500 py-3 text-white font-medium text-lg"
                >
                  {user ? <BuyNowModel
                  addressInfo={addressInfo}
                  setAddressInfo={setAddressInfo}
                  buyNowFunction={buyNowFunction}
                  />:<Navigate to={'/login'}/>}
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
