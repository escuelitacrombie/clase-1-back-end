import { Router } from "express";

import { 
    createUser, 
    deleteUser, 
    getAllUsers,
    getUserById,
    updateUser 
} from "./services";

const userRoute = Router();

userRoute.get("/", (req,res)=>{
    res.json(getAllUsers());
});

userRoute.delete("/:id",(req,res)=>{
    const id = req.params.id;
    deleteUser(id);
    res.status(200).json({message:"delete success"});
});

userRoute.get("/:id", (req,res)=>{
    const id=req.params.id;
    res.json(getUserById(id))
});

userRoute.post("/", (req,res)=>{
    const user = req.body;
    createUser(user);
    res.status(201).json({message:"create success"});
});

userRoute.put("/:id", (req,res)=>{
    const id=req.params.id;
    const user = req.body;
    res.status(200).json({message:"edit success"}).json(updateUser(id,user));
    
});

export default userRoute;
