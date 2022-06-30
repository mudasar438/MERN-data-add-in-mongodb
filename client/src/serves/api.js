import axios from "axios";

const URL = "http://localhost:8000"

export const addUser = async(data)=>{
    try{
      console.log("listening to addUser", data)
      return await axios.post(`${URL}/add`, data)

    } catch(err){
        console.log("Error While Calling addUser API", err);

    }
}


// ----- get ALL users ---------
export const getUsers = async()=>{
    try{
      console.log("listening to getUsers")
      return await axios.get(`${URL}/all`)

    } catch(err){
        console.log("Error While Calling getUsers API", err);

    }
}


//----------- Edit User -----------
// export const editUser = async(data)=>{
//     try{
//       console.log("listening to editUser", data)
//       return await axios.put(`${URL}/edit`, data)

//     } catch(err){
//         console.log("Error While Calling editUser API", err);

//     }
// }