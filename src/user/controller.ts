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
    res.json(getAllUsers());
});

userRoute.get("/:id", (req,res)=>{
    const id=req.params.id;
    res.json(getUserById(id))
});

userRoute.post("/", (req,res)=>{
    const user = req.body;
    createUser(user);
    res.status(201).json({message:"success"});
});

userRoute.put("/:id", (req,res)=>{
    const id=req.params.id;
    const user = req.body;
    res.json(updateUser(id,user));
});

export default userRoute;
