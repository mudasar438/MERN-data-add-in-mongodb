import React, { useEffect } from 'react'
import { editUser } from '../serves/api'
import { saveUser } from '../serves/api'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




const EditUser = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const inpvalues = {
    name: '',
    email: '',
    phone: '',
    city:'',
  }
  const [user, setUser]=useState(inpvalues);

    const handleChange = (e) => {
      setUser({...user,[e.target.name]: e.target.value})

    }

    useEffect(() => {
      loadUserDetail();
    }, [])
    
    const loadUserDetail = async() => {
      const response = await editUser(id)
      // console.log  ( "=============>",response);
      setUser(response.data[0])
    

    }


    const submitbtn = async() => {
      await saveUser(user, id)
      Navigate('/alluser')
     
      
    }

    //  console.log("=======>", user);
  return (
   <>
   <div className=" max-w-screen-2xl my-12 ">
      <div className="text-3xl text-center md:w-[20%] mx-auto my-5 text-white">Edit User</div>


      <div className="w-[80%]  md:w-[35%] mx-auto  rounded-md p-2 text-white">
        {/* <form action=""> */}

        
      <div className="my-2 w-[80%]  mx-auto">
        <label htmlFor="">Name</label> 
        <br />
        <input type="text-xl py-2" placeholder='username' name='name' value={user.name} onChange={(e)=>handleChange(e)} className='border rounded-md w-full p-2 text-black border-black   '/>
      </div>
      <div className="my-2 w-[80%]  mx-auto">
        <label htmlFor="">Email</label> 
        <br />
        <input type="text" placeholder='Email@gmail.com' name='email' value={user.email} onChange={(e)=>handleChange(e)}  className='border rounded-md w-full p-2 text-black border-black  '/>
      </div>
      <div className="my-2 w-[80%]  mx-auto">
        <label htmlFor="">Phone</label> <br />
        <input type="text" placeholder='+923564296' name='phone' value={user.phone} onChange={(e)=>handleChange(e)} className='border rounded-md w-full p-2 text-black border-black  '/>
      </div>
      <div className="my-2 w-[80%]  mx-auto">
        <label htmlFor="">City</label>
        <input type="text" placeholder='FSD' name='city' value={user.city} onChange={(e)=>handleChange(e)} className='border rounded-md w-full p-2 text-black border-black  '/>
      </div>
      <div className=" bg-slate-500 rounded-md border p-2 border-gray-700 w-[80%] mx-auto  text-center mr-auto">
       <button onClick={submitbtn} >Edit Save</button>
      
      </div>
      {/* </form> */}

      </div>
    
     

     
    </div>
   
   </>
  )
}

export default EditUser