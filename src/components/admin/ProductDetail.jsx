import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDb } from "../../firebase/FireBaseConfig";
import toast from "react-hot-toast";

function ProductDetail() {
  const { loading, setLoading, getAllProduct, getAllProductFunction } = useContext(MyContext);
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDb, 'products', id));
      toast.success("Product deleted successfully");
      getAllProductFunction(); // Refresh products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-xl text-pink-300 font-bold">All Products</h1>
        <Link to={'/addproduct'}>
          <button className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg">
            Add Product
          </button>
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <tbody>
              <tr>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">S.No.</th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Image</th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Title</th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Price</th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Category</th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Date</th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Edit</th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold">Delete</th>
              </tr>
              {getAllProduct.length > 0 ? (
                getAllProduct.map((item, i) => (
                  <tr key={item.id} className="text-pink-300">
                    <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500">{i + 1}.</td>
                    <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500">
                      <img className="w-20" src={item.productImageUrl} alt="Product" />
                    </td>
                    <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500">{item.title}</td>
                    <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500">{item.price}</td>
                    <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500">{item.category}</td>
                    <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500">{item.date}</td>
                    <td 
                      onClick={() => navigate(`/updateproduct/${item.id}`)}
                      className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500 cursor-pointer"
                    >
                      Edit
                    </td>
                    <td 
                      onClick={() => deleteProduct(item.id)} 
                      className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-500 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-pink-400">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
