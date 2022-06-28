import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

  return (
 <>
 <div className="max-w-screen-2xl bg-blue-500">
 <div className=' w-[40%] mx-auto flex justify-between'>
      <button onClick={() => navigate('/')}>Adduser</button>
     <button onClick={ () =>navigate('/about')}>ALL User</button>
     
 </div>

 </div>
 
 
 
 
 </>
  )
}

export default Navbar