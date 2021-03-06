import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

  return (
 <>
 <div className="max-w-screen-2xl bg-black  mb-5">
 <div className=' md:w-[40%] mx-auto flex justify-around text-xl p-3'>
      <button onClick={() => navigate('/')} className="border-2 p-2 rounded bg bg-white te">Add User</button>
     <button onClick={ () =>navigate('/alluser')} className="border-2 p-2 rounded bg-white">ALL User</button>
     
 </div>

 </div>
 
 
 
 
 </>
  )
}

export default Navbar