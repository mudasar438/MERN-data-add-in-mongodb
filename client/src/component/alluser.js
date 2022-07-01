import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../serves/api";
import { deleteuser } from "../serves/api";
import { Link } from "react-router-dom";
import Search from "./search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // console.log(search);
  useEffect(() => {
    // console.log('clicked')
    getalluser();
  }, []);
// console.log(users,"users")
  const getalluser = async () => {
    try{

      let response = await getUsers();
      setUsers(response.data);
    }
    catch(error){
      console.error(error)
    }
  };

  const SearchFilter = 
  users.filter((user) => {
    return user.name?.toLowerCase().includes(search.toLowerCase());
  });

  const deleteUserDetail = async (id) => {
    await deleteuser(id)
      .then((res) => {
        getalluser();  
        if (res.status === 200) {
          toast.success("User Delete Successfully", {
            position: "top-right",
            autoClose: 1000,
          });
        } else {
          toast.error("User Delete Failed", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="max-w-screen-2xl">
        <Search handleSearch={handleSearch} />
        {SearchFilter.length ? (
          <div className="w-[80%] mx-auto text-white flex my-10 ">
            <table className="table-auto w-[100%] text-left whitespace-no-wrap border-separate bg-gray-800">
              <thead>
                <tr>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    Email{" "}
                  </th>

                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    Phone
                  </th>
                  <th className="px-4 py-3   tracking-wider font-medium text-white bg-gray-900">
                    City
                  </th>
                  <th className="px-4 py-3 text-center  tracking-wider font-medium text-white bg-gray-900">
                    Operation
                  </th>
                </tr>
              </thead>
              <tbody>
                {SearchFilter.map((user, index) => {
                  // console.log(user);
                  return (
                    <tr key={index} className="space-y-3">
                      <td className="px-4 py-2">{user.name}</td>
                      <td className="px-4 py-2">{user.email}</td>
                      <td className="px-4 py-2">{user.phone}</td>
                      <td className="px-4 py-2">{user.city}</td>
                      {/* <td className='px-4 py-2'> {user._id}</td> */}
                      <td className="px-4 py-2 space-x-3 flex justify-center">
                        <Link to={`/edit/${user._id}`}>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md">
                            Edit
                          </button>
                        </Link>
                        <div className="">
                          <button
                            onClick={() => deleteUserDetail(user._id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
                          >
                            Delete
                          </button>
                          <ToastContainer />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-2xl text-center text-white mt-12 lg:text-4xl font-bold">
            "{search}" User Not found
          </div>
        )}
      </div>
    </>
  );
};

export default Alluser;
