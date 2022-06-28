 // in this file import userModal 
 // then  create addUser function and export it
 // in the function create new userModal and save it to the database
 
 const UserModal = require('../secma/userSema.js')
const addUser = async(req , res) => {
    const user1 = req.body;
    console.log(user1)
    const newUser =new UserModal(user1);
    try{
        await newUser.save();
        // res.send(newUser);
        res.status(201).json(newUser)

    } catch (err){
        console.log(err.message);

    }


}
module.exports = addUser;
