import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import { fireDb } from '../firebase/FireBaseConfig';
import toast from 'react-hot-toast';

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const [getAllProduct, setGetAllProduct] = useState([]);
  const [getAllOrder,setGetAllOrder]=useState([]);
  const [getAllUser,setGetlAllUser]=useState([]);
  // Function to fetch all products from Firestore
  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDb, 'Product'), orderBy('time'));
      const querySnapshot = await getDocs(q);
      
      const productArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Fetched products:", productArray);
      setGetAllProduct(productArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // get All Order Function 
  const getAllOrderFunction = async () =>{
    setLoading(true)
    try {
      const q=query(collection(fireDb,'order'),orderBy('time'))
      // const querySnapshot = await getDocs(q);
      const data = onSnapshot(q,(QuerySnapshot)=>{
        let orderArray = [];
        QuerySnapshot.forEach((doc)=>{
          orderArray.push({...doc.data(),id:doc.id})
        });
        setGetAllOrder(orderArray)
        setLoading(false)
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false)
      
    }
  }
  // Delete Order Function
  const orderDelete = async (id) =>{
    setLoading(true);
    try {
      await deleteDoc(doc(fireDb,'order',id))
      toast.success('Order Deleted SuccessFully...');
      getAllOrderFunction();
      setLoading(false)
    } catch (error) {
      console.log(error);
      
    }
  }
  // GetAllUser user Function
  const getAllUserFunction =async () =>{
    setLoading(true);
    try {
      const q = query(collection(fireDb,'user'),orderBy('time'));
      const data = onSnapshot(q,(QuerySnapshot)=>{
        let userArray=[];
        QuerySnapshot.forEach((doc)=>{
          userArray.push({...doc.data(),id:doc.id})
        })
        setGetlAllUser(userArray)
        setLoading(false)
      })
      return () => data
    } catch (error) {
      console.log(error);
      
    }
  }
  // Fetch products on initial render
  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFunction();
  }, []);

  return (
    <MyContext.Provider value={{
      loading,
      setLoading,
      getAllProduct,
      getAllProductFunction,
      getAllOrder,
      orderDelete,
      getAllUser
    }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
