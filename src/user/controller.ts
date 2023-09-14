import { Router } from "express";

import { 
    createUser, 
    deleteUser, 
    getAllUsers,
    getUserById,
    updateUser,
    getUsersProducts 
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

userRoute.get("/:id/products",(req,res)=>{
    const id=req.params.id;
    const user=(getUserById(id));
    const userProduct=getUsersProducts(id);
    const response ={ 
        message:`Productos de ${user?.name} ${user?.username}`,
        result:userProduct
    }
    res.json(response);
})

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
