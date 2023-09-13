import User from "../types/user";

import allUser from "./mock-data";


export const getAllUsers = () =>{
    return allUser;
}

export const getUserById = (id:string)=>{
    return allUser.find((user)=>user.id === id);
}

export const createUser =(user:User) => {
    allUser.push(user);
    return user;
}

export const updateUser = (id:string, user:User) => {
    const index = allUser.findIndex((user)=>user.id===id);
    allUser[index] = user;
    return user;
}

export const deleteUser =(id:string)=>{
    const index = allUser.findIndex((user) => user.id===id);
    allUser.splice(index,1);
    return id;
}