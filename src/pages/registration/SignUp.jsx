import React, { useContext } from "react";
import { useState } from "react";
// import { useRouter } from 'next/router';
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import toast from "react-hot-toast"
import { auth, fireDb } from "../../firebase/FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";

function SignUp() {
  const context=useContext(MyContext);
  const {loading,setLoading}=context;
  // Navigate
  const navigate = useNavigate();

  // user SignUp State
  const [userSignUp,setUserSignUp]=useState({
    name:"",
    email:"",
    password:"",
    role:"user"
  });
  // user SignUp Function 
  const userSignUpFunction = async () =>{
        // Validation
        if(userSignUp.name === "" || userSignUp.email === "" || userSignUp.password === "")
        {
          return toast.error("All Fields are Required");
        }
        setLoading(true);
        try {
          const users = await createUserWithEmailAndPassword(auth,userSignUp.email,userSignUp.password);
          // user object to store in firestore database
          const user = {
            name:userSignUp.name,
            email:users.user.email,
            uid:users.user.uid,
            role:userSignUp.role,
            time:Timestamp.now(),
            date:new Date().toLocaleString("en-US",
              {
                month:"short",
                day:"2-digit",
                year:"numeric",
              }
            ),
          } 
          // create user reference
          const userReference = collection(fireDb,"user");
          // Add User Details on the firebase
          addDoc(userReference,user);
          setUserSignUp({
            name:"",
            email:"",
            password:""
          })
          toast.success("SignUp SuuccessFully");
          setLoading(false);
          navigate('/login');
        } catch (error) {
          console.log(error);
          setLoading(false);
          
        }
  }
  return (
    <Layout>
      <div>
        <div className="flex mt-20 justify-center">
          {/* {loading && <Loader/>} */}
          <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">
            <div className="mb-5">
              <h2 className="text-center text-2xl font-bold text-pink-500">
                SignUp
              </h2>
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Full Name" value={userSignUp.name} 
              onChange={(e)=>setUserSignUp({
                ...userSignUp,
                name:e.target.value
              })}
              />
            </div>
            <div className="mb-3">
              <input type="email" placeholder="enter email" value={userSignUp.email}
              onChange={(e)=>setUserSignUp({
                ...userSignUp,
                email:e.target.value
              })}
              />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Enter Password" value={userSignUp.password}
              onChange={(e) => setUserSignUp({
                ...userSignUp,
                password:e.target.value
              })}
              />
            </div>
            <div className="mb-5">
              <button onClick={userSignUpFunction} className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md" type="button">SignUp</button>
            </div>
            <div>
                <h2 className="text-black">
                    Have an account
                    <Link className="text-pink-500 font-bold" to={'/login'}>
                    &nbsp;Login
                    </Link>
                </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
