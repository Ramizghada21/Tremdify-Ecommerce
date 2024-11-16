import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDb } from "../../firebase/FireBaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";


function ProductInfo() {
    const {loading,setLoading}=useContext(MyContext);
    const [product,setProduct]=useState('');
    const {id}=useParams();
    // Get Product Data Function
    const getProductData = async () =>{
      setLoading(true);
      try {
        const productTemp = await getDoc(doc(fireDb,'Product',id))
        setProduct({...productTemp.data(),id:productTemp.id});
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
        
      }
    }
    const cartItems = useSelector((state) => state.cart); 
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart successfully!");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart successfully!");
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

    useEffect(()=>{
      setLoading(true);
      getProductData();
      setLoading(false)
    },[product,setProduct])
  return (
    <div>
      <Layout>
        <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
          <div className="max-w-6xl px-4 mx-auto">
            {loading && (
              <p>Loading...</p>
            )}
            <div className="flex flex-wrap mb-24 mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                <div className="">
                  <div className="">
                    <img
                      className="w-full lg:h-[39em] rounded-lg"
                      src={product?.productImageUrl}
                      alt="Ramiz"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-6">
                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                      {product?.title}
                    </h2>
                    <div className="flex flex-wrap items-center mb-6">
                      <ul className="flex mb-4 mr-2 lg:mb-0">
                        <li>
                          <a href=""></a>
                        </li>
                      </ul>
                    </div>
                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                      <span>Rs.{product?.price}</span>
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                      Description
                    </h2>
                    <p>
                      {product?.description}
                    </p>
                  </div>
                  <div className="mb-6" />
                  <div className="flex flex-wrap items-center mb-6">
                    {cartItems.some((p)=> p.id === product.id)?
                        <button onClick={()=> deleteCart(product)} className="bg-pink-500 hover:bg-pink-600 px-2 py-2 w-full text-white rounded-lg font-bold ">
                        Delete From Cart
                      </button>
                      :
                      <button onClick={()=> addCart(product)} className="bg-pink-500 hover:bg-pink-600 px-2 py-2 w-full text-white rounded-lg font-bold ">
                          Add To Cart
                        </button>  
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default ProductInfo;
