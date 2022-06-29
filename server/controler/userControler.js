 // in this file import userModal 
 // then  create addUser function and export it
 // in the function create new userModal and save it to the database
 
 const UserModal = require('../secma/userSema.js')
exports.addUser = async(req , res) => {
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
// module.exports = addUser;

// console.log(UserModal)
exports.getUsers = async(req , res) => {
    try{
        const users = await UserModal.find();
        res.status(200).json(users)
        

    } catch (err){
        console.log("get requt field from mongodb",err.message);


    }
} 

// module.exports = getUsers;