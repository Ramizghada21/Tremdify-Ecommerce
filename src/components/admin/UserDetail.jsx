import React, { useContext } from "react";
import myContext from "../../context/MyContext";

function UserDetail() {
  const context = useContext(myContext);
  const { getAllUser } = context;

  return (
    <div>
      <div>
        <div className="py-5 ">
          <h1 className="text-xl text-pink-300 font-bold">All Users</h1>
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
                  Name
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
                  Uid
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
                >
                  Date
                </th>
              </tr>
              {getAllUser.map((item, i) => {
                return (
                    <tr key={i} className="text-pink-300">
                      <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                        {i + 1}.
                      </td>
                      <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                        {item.name}
                      </td>
                      <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                        {item.email}
                      </td>
                      <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                        {item.uid}
                      </td>
                      <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                        {item.role}
                      </td>
                      <td className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 transition stroke-slate-500 text-slate-500">
                        {item.date}
                      </td>
                    </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
