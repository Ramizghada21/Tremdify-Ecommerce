import React, { useContext } from "react";
import myContext from "../../context/MyContext";

function OrderDetail() {
  const contex = useContext(myContext);
  const { getAllOrder,orderDelete} = contex;
  return (
    <div>
      <div>
        <div className="py-5 ">
          <h1 className="text-xl text-pink-300 font-bold">All Order</h1>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  S.No.
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Order Id
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Total Price
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Pincode
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Mobile_Number
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Delete
                </th>
              </tr>
              {getAllOrder.map((order) => {
                return (
                  <>
                    {order.cartItems.map((item, index) => {
                      const {id,productImageUrl,title,category,price,quantity}=item
                      return (
                        <tr key={index} className="text-pink-300">
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {index+1}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {id}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            <img src={productImageUrl} alt="image"/>
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {title}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {category}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            $ {price}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {quantity}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            $ {quantity * price}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {order.status}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {order.addressInfo.name}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {order.addressInfo.address}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {order.addressInfo.pincode}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {order.addressInfo.mobileNumber}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {order.email}
                          </td>
                          <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                            {order.date}
                          </td>
                          <td onClick={() => orderDelete(order.id)} className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                          Delete  
                          </td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
