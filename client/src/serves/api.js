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