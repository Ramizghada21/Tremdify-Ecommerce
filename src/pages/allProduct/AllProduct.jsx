import React, { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";



function AllProduct() {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { getAllProduct, loading } = context;
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

  return (
    <Layout>
      <div className="py-8">
        <div>
          <h1 className="text-center mb-5 text-2xl font-semibold">
            All Products
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mx-auto">
            <div>
              {loading && (
                <p className="flex justify-center text-2xl">Loading...</p>
              )}
            </div>
            <div className="flex flex-wrap m-4">
              {getAllProduct.map((item, i) => {
                const { id, productImageUrl, title, price } = item;
                return (
                  <div key={i} className="p-4 w-full md:w-1/4">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursior-pointer">
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="lg:h-80 h-96 w-full"
                        src={productImageUrl}
                        alt="Blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widset text-xs title-font font-medium text-gray-400 mb-1">
                          E-BHARAT
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title.substring(0, 25)}
                        </h1>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          ${price}
                        </h1>
                        <div className="flex justify-center">
                        {cartItems.some((p)=> p.id === item.id)?
                        <button onClick={()=> deleteCart(item)} className="bg-pink-500 hover:bg-pink-600 px-2 py-2 w-full text-white rounded-lg font-bold ">
                        Delete From Cart
                      </button>
                      :
                      <button onClick={()=> addCart(item)} className="bg-pink-500 hover:bg-pink-600 px-2 py-2 w-full text-white rounded-lg font-bold ">
                          Add To Cart
                        </button>  
                      }
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default AllProduct;
