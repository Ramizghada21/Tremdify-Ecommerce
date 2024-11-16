import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/MyContext'
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDb } from '../../firebase/FireBaseConfig';
import { collection, onSnapshot, query, QuerySnapshot, where } from 'firebase/firestore';

function Login() {
  const context = useContext(MyContext);
  const {loading,setLoading}=context;
  const navigate= useNavigate();

  const[userLogin,setUserLogin]=useState({
    email:"",
    password:""
  });

  const userLoginFunction = async () =>{
      if(userLogin.email === "" || userLogin.password === "")
      {
        return toast.error("Both Fields are required");
      }
      setLoading(true);
      try {
        const users = await signInWithEmailAndPassword(auth,userLogin.email,userLogin.password);
        console.log(users);
        try {
          const q = query(
            collection(fireDb,"user"),
            where('uid', '==',users?.user?.uid)
          )
          const data= onSnapshot(q,(QuerySnapshot)=>{
            let user;
            QuerySnapshot.forEach((doc)=> user = doc.data());
            localStorage.setItem("users",JSON.stringify(user));
            setUserLogin({
              email:"",
              password:""
            })
            toast.success("Login Successfully");
            setLoading(false);
            if(user.role === "user")
            {
              navigate('/userdashboard');
            }
            else
            {
              navigate('/admindashboard');
            }
          });
          return () => data;
        } catch (error) {
          console.log(error);
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
  }
  return (
    <Layout>
        <div>
        <div className="flex mt-20 justify-center">
          <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">
            <div className="mb-5">
              <h2 className="text-center text-2xl font-bold text-pink-500">
                Login
              </h2>
            </div>
            <div className="mb-3">
              <input type="email" placeholder="Enter email" value={userLogin.email} 
              onChange={(e)=>setUserLogin({
                ...userLogin,
                email:e.target.value
              })}
              />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Enter Password" value={userLogin.password}
              onChange={(e) => setUserLogin({
                ...userLogin,
                password:e.target.value
              })}
              />
            </div>
            <div className="mb-5">
              <button type='button' onClick={userLoginFunction} className='text-pink-500 py-2 rounded-md bg-pink-100 cursior-pointer text-2xl w-full font-bold text-center'>Login</button>
            </div>
            <div>
                <h2 className="text-black">
                    you don't have an account
                    <Link className="text-pink-500 font-bold" to={'/signup'}>
                    &nbsp;Sign-Up
                    </Link>
                </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login