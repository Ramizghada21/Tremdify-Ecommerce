import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import {addDoc, collection, Timestamp} from "firebase/firestore"
import toast from "react-hot-toast"
import { fireDb } from "../../firebase/FireBaseConfig";
const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "Shirt",
  },
  {
    name: "Jacket",
  },
  {
    name: "Mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "Shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

function AddProductPage() {
  const context = useContext(MyContext);
  const {loading,setLoading} = context;
  const navigate = useNavigate();

  const [product,setProduct] = useState({
    title:'',
    price:'',
    ProductImageUrl:'',
    category:'',
    description:'',
    quantity:1,
    time:Timestamp.now(),
    date:new Date().toLocaleString(
      "en-US",
      {
        month:"short",
        day:"2-digit",
        year:"numeric",
      }
    )
  });
  const addProductFunction = async () =>{
        if(product.title === '' || product.price === '' || product.ProductImageUrl === '' || product.category === '' || product.description === '')
        {
          return toast.error("All fields are Required...");
        }
        setLoading(true);
        try {
          const productRef = collection(fireDb,'Product');
          await addDoc(productRef,product)
          toast.success("Product added Successfully...")
          navigate('/admindashboard')
          setLoading(false)     
        } catch (error) {
          console.log(error);
          setLoading(false)
          toast.error("Failed to added")
          
        }
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {/* Login Form */}
        <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          {/* Top Heading */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500">
              Add Product
            </h2>
          </div>
          {/* Input One */}
          <div className="mb-3">
            <input
              type="text"
              value={product.title}
              onChange={(e)=> setProduct({
                ...product,
                title:e.target.value
              })}
              name="title"
              placeholder="Product Title "
              className="bg-pink-50 text-pink-300 border border-pink-200 px-4 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* Input Two */}
          <div className="mb-3">
            <input
              type="number"
              value={product.price}
              onChange={(e) => setProduct({
                ...product,
                price:e.target.value
              })}
              placeholder="Product Price "
              className="bg-pink-50 text-pink-300 border border-pink-200 px-4 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* Input Three */}
          <div className="mb-3">
            <input
              type="text"
              value={product.ProductImageUrl}
              onChange={(e) => setProduct({
                ...product,
                ProductImageUrl:e.target.value
              })}
              placeholder="Product image Url "
              className="bg-pink-50 text-pink-300 border border-pink-200 px-4 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
          </div>
          {/* input Four */}
          <div className="mb-3">
            <select 
            value={product.category}
            onChange={(e) =>setProduct({
              ...product,
              category:e.target.value
            })}
            className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none">
              <option disabled>Select product category</option>
              {categoryList.map((value, i) => {
                const { name } = value;
                return (
                  <option
                    className="first-letter:uppercase"
                    key={i}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Input Five */}
          <div className="mb-3">
            <textarea 
            value={product.description}
            onChange={(e) => setProduct({
              ...product,
              description:e.target.value
            })}
            name="description" placeholder="Product description" rows="5" className="w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300">
            </textarea>
          </div>
          <div className="mb-3">
          <button
          type="button"
          onClick={addProductFunction}
          className="bg-pink-500  hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md"
          >Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
