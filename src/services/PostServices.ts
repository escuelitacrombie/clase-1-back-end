import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient()

//Crear un post
export const createPost = async (post: Post) => {
    try {
        const result = await prisma.post.create({data: post})
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Traer todos los posts
export const getPosts = async () => {
    try {
        const result = await prisma.post.findMany()
        return result
    } catch (error) {
        console.log(error);
    }
}

//Traer un post por ID
export const getPostById = async (id: number) => {
    try {
        const result = await prisma.post.findUnique({
            where: { id },
        });

        return result
    } catch (error) {
        console.error(error);
    }
}