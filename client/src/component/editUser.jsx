import React, { useEffect } from 'react'
import { editUser } from '../serves/api'
import { useState } from 'react'


const EditUser = () => {
  const inpvalues = {
    name: '',
    email: '',
    phone: '',
    city:'',
  }
  const [user, setUser]=useState(inpvalues);

    const handleChange = (e) => {

    }

    useEffect(() => {
      loadUserDetail();
    }, [])
    
    const loadUserDetail = async() => {
      // await editUser().then(res => {
      //   setUser(res.data)
      // }).catch(err => {
      //   console.log(err);
      // })

    }


    const submitbtn = () => {
      console.log("Click EDit btn");
    }
  return (
   <>
   <div className=" max-w-screen-2xl my-12 ">
      <div className=" text-3xl w-[20%] mx-auto my-5">Edit User</div>


      <div className="w-[20%] mx-auto border-2 p-2">
        {/* <form action=""> */}

        
      <div className="my-2 flex justify-around">
        <label htmlFor="">Name</label>
        <input type="text" placeholder='username' name='name' onChange={(e)=>handleChange(e)} className='border border-black  '/>
      </div>
      <div className="my-2 flex justify-around">
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Email@gmail.com' name='email' onChange={(e)=>handleChange(e)}  className='border border-black '/>
      </div>
      <div className="my-2 flex justify-around">
        <label htmlFor="">Phone</label>
        <input type="text" placeholder='+923564296' name='phone' onChange={(e)=>handleChange(e)} className='border border-black '/>
      </div>
      <div className="my-2 flex justify-around">
        <label htmlFor="">City</label>
        <input type="text" placeholder='FSD' name='city' onChange={(e)=>handleChange(e)} className='border border-black '/>
      </div>
      <div className=" bg-slate-500 rounded-md border border-gray-700 w-[78%] mx-auto  text-center mr-0">
       <button onClick={submitbtn} >Edit Save</button>
      </div>
      {/* </form> */}

      </div>
    
     

     
    </div>
   
   </>
  )
}

export default EditUser