import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs"
import ProductDetail from "../../components/admin/ProductDetail";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";
import myContext from "../../context/MyContext";

function AdminDashBoard() {
  const user = JSON.parse(localStorage.getItem('users')); // Correctly parse the user data
  // console.log("User:", user);
  const context=useContext(myContext)
  const {getAllProduct,getAllOrder,getAllUser}=context;

  return (
    <Layout>
      <div>
        <div className="top mb-5 px-5 mt-5">
          <div className="bg-pink-50 py-5 border border-pink-100 rounded-lg">
            <h1 className="text-center text-2xl font-bold text-pink-500">
              Admin DashBoard
            </h1>
          </div>
        </div>
        <div className="top">
          <div className="bg-pink-50 py-5 rounded-xl border border-pink-100">
            <div className="flex justify-center">
              <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
            </div>
            <div className="">
              <h1 className="text-center text-lg">
                <span className="font-bold">Name:</span>{user?.name}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Email:</span>
                {user?.email}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Date:</span>
                {user?.date}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Role:</span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <Tabs>
          <TabList className="flex flex-wrap m-4 text-center justify-center">
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className="border bg-pink-50 hover:border-pink-100 border-pink-100 px-4 py-3 rounded-xl">
                <div className="text-pink-500 w-12 h-12 mb-3 inline-block">
                  <svg></svg>
                </div>
                <h2 className="title-font font-medium text-3xl text-pink-400 fonts1">
                  {getAllProduct.length}
                </h2>
                <p className="text-pink-500 font-bold">Total Products</p>
              </div>
            </Tab>
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className="border bg-pink-50 hover:border-pink-100 border-pink-100 px-4 py-3 rounded-xl">
                <div className="text-pink-500 w-12 h-12 mb-3 inline-block">
                  <svg></svg>
                </div>
                <h2 className="title-font font-medium text-3xl text-pink-400 fonts1">
                  {getAllOrder.length}
                </h2>
                <p className="text-pink-500 font-bold">Total Orders</p>
              </div>
            </Tab>
            <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
              <div className="border bg-pink-50 hover:border-pink-100 border-pink-100 px-4 py-3 rounded-xl">
                <div className="text-pink-500 w-12 h-12 mb-3 inline-block">
                  <svg></svg>
                </div>
                <h2 className="title-font font-medium text-3xl text-pink-400 fonts1">
                  {getAllUser.length}
                </h2>
                <p className="text-pink-500 font-bold">Total Users</p>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <ProductDetail/>
          </TabPanel>
          <TabPanel>
            <OrderDetail/>
          </TabPanel>
          <TabPanel>
            <UserDetail/> 
          </TabPanel>
          </Tabs>          
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashBoard;
