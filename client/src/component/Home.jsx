import React from "react";
import { addUser } from "../serves/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const inpvalues = {
    name: "",
    email: "",
    phone: "",
    city: "",
  };
  const [user, setUser] = useState(inpvalues);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const submitbtn = () => {
    // console.log("You are click on add button");
    addUser(user);

    setUser(inpvalues);

    toast.success("User Added Successfully", {
      position: "top-right",
      autoClose: 1000,
    });

    // alert("Data ADD Into MongoBD")
  };
  return (
    <>
      <div className=" max-w-screen-2xl my-12 ">
        <div className=" text-3xl text-center md:w-[20%] mx-auto my-5 text-white">
          Add User
        </div>

        <div className=" w-[80%]  md:w-[35%] mx-auto  rounded-md p-2 text-white">
          {/* <form action=""> */}

          <div className="my-2 w-[80%]  mx-auto">
            <label htmlFor="" className="text-xl py-2">
              Name :
            </label>
            <br />
            <input
              type="text"
              placeholder="username"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
              className="border rounded-md w-full p-2 text-black border-black  "
            />
          </div>
          <div className="my-2 w-[80%]  mx-auto ">
            <label htmlFor="" className="text-xl p-2">
              Email :
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Email@gmail.com"
              name="email"
              value={user.email}
              className="border rounded-md w-full text-black p-2 border-black "
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-2 w-[80%]  mx-auto ">
            <label htmlFor="" className="text-xl p-2">
              Phone :
            </label>
            <input
              type="text"
              placeholder="+923564296"
              name="phone"
              value={user.phone}
              onChange={(e) => handleChange(e)}
              className="border text-black rounded-md w-full p-2 border-black "
            />
          </div>
          <div className="my-2 w-[80%]  mx-auto ">
            <label htmlFor="" className="text-xl p-2">
              City :
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="FSD"
              name="city"
              value={user.city}
              onChange={(e) => handleChange(e)}
              className="rounded-md  text-black w-full p-2 border border-black "
            />
          </div>
          <div
            onClick={submitbtn}
            className=" bg-slate-500 rounded-md border p-3 border-gray-700 w-[80%] mx-auto  text-center mt-5"
          >
            <button>Submit</button>
            <ToastContainer />
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default Home;
