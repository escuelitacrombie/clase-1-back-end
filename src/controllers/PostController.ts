import { Router } from "express";
import { createPost, getPostById, getPosts } from "../services/PostServices";
import { Post } from "@prisma/client";

const PostController = Router();

// Obtener las publicaciones
PostController.get("/", async (req, res) => {
    try {
        const posts = await getPosts()
        return res.status(200).json(posts)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Hubo un error al obtener la lista de posteos"})
    }
});

//Obtener una publicación por ID
PostController.get("/:id",async (req,res) => {
    try {
        const postId = req.params.id
        const post = await getPostById(Number(postId))

        return res.status(200).json(post)
    } catch (error) {
        console.error(error);
        return res.status(400).json({error: "El id que busca no existe"})
    }
})

// Crear una publicación
PostController.post("/", async (req, res) => {
    const post = req.body as Post

    // Validaciones
    if (!post.content || post.content.length < 10) {
        res
            .status(400)
            .json({ message: "Los datos no son correctos por favor verificarlos" });
    }

    const createdPost = await createPost(post);

    return res
        .status(createdPost ? 201 : 500)
        .json(
            createdPost
                ? { message: "Creado exitosamente" }
                : { message: "Ocurrió un problema intente mas tarde" }
        );
});

export default PostController;