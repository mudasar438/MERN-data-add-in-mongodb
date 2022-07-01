import React from 'react';
import { addUser } from '../serves/api';
import { useState } from 'react';

const Home = () => {
  const inpvalues = {
    name: '',
    email: '',
    phone: '',
    city:'',
  }
  const [user, setUser]=useState(inpvalues);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({...user,[e.target.name]: e.target.value})
    // console.log(user);
  }

  const submitbtn = ()=>{
    console.log("You are click on add button");
    addUser(user)
    alert("Data ADD Into MongoBD")
    
  }
  return (
    <>
    <div className=" max-w-screen-2xl my-12 ">
      <div className=" text-3xl text-center md:w-[20%] mx-auto my-5 text-white">Add User</div>


      <div className=" w-[80%]  md:w-[35%] mx-auto  rounded-md p-2 text-white">
        {/* <form action=""> */}

        
      <div className="my-2 w-[80%]  mx-auto">
        <label htmlFor="" className='text-xl py-2'>Name :</label>
        <br />
        <input type="text" placeholder='username' name='name' onChange={(e)=>handleChange(e)} className='border rounded-md w-full p-2 text-black border-black  '/>
      </div>
      <div className="my-2 w-[80%]  mx-auto ">
        <label htmlFor="">Email</label> <br />
        <input type="text" placeholder='Email@gmail.com' name='email' className="border rounded-md w-full text-black p-2 border-black " onChange={(e)=>handleChange(e)}   />
      </div>
      <div className="my-2 w-[80%]  mx-auto ">
        <label htmlFor="">Phone</label>
        <input type="text" placeholder='+923564296' name='phone' onChange={(e)=>handleChange(e)} className='border text-black rounded-md w-full p-2 border-black '/>
      </div>
      <div className="my-2 w-[80%]  mx-auto ">
        <label htmlFor="">City</label> <br />
        <input type="text" placeholder='FSD' name='city' onChange={(e)=>handleChange(e)} className='rounded-md  text-black w-full p-2 border border-black '/>
      </div>
      <div className=" bg-slate-500 rounded-md border p-2 border-gray-700 w-[80%] mx-auto  text-center mr-auto">
       <button onClick={submitbtn} >Submit</button>
      </div>
      {/* </form> */}

      </div>
    
     

     
    </div>
    </>
  )
}

export default Home