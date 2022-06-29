import React from 'react'
import { useEffect , useState} from 'react'
import {getUsers} from '../serves/api';

const Alluser = () => {

  const [users, setUsers] = useState([]);
    useEffect(() => {
      getalluser()

    }, [])

    const getalluser = async() => {
      let response = await getUsers();
      console.log(response.data);
      setUsers(response.data);

    }
  return (
   <>
   <div className="max-w-screen-2xl">
    <div className="w-[80%] mx-auto border-2 flex ">
    <table className="table-auto w-[100%] text-left whitespace-no-wrap border-separate bg-white">
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
                  {users.map((user, index) =>{
                    return(
                      <tr key={index}>
                        <td className="px-4 py-2">{user.name}</td>
                        <td className="px-4 py-2">{user.email}</td>
                        <td className="px-4 py-2">{user.phone}</td>
                        <td className="px-4 py-2">{user.city}</td>
                        <td className="px-4 py-2">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Edit
                          </button>
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}

                  
                      
                  
                </tbody>
              </table>
    </div>
   </div>
   </>
  )
}

export default Alluser