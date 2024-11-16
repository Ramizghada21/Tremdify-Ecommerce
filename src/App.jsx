import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./components/admin/UpdateProductPage";
import MyState from "./context/MyState";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import OrderPage from "./pages/order/OrderPage";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/category/:categoryname" element={<CategoryPage/>}/>
          <Route path="/orderpage" element={<OrderPage/>}/>
          <Route
            path="/userdashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashBoard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage /> 
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;
