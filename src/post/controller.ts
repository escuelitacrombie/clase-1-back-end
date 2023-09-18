import { Router } from "express";
import { getAllPosts,getById,deletePost,createPost,updatePost,getPostVendedor,asignPostToVendedor} from "./services";

const postRoutes = Router();


//Post crear - Put para update - Delete borra y los get para traer
postRoutes.get("/", (req, res) => {//Get all
  res.json(getAllPosts());
});

postRoutes.get("/:id", (req, res) => {//Get by one id
  const post=getById(Number(req.params.id));
  if(!post){
    res.status(404).json({Error:"Post not found"});
  }
  else{
    res.status(201).json(post);
  }
});



postRoutes.delete("/:id",(req,res)=>{//Delete
  const post=deletePost(Number(req.params.id));
  if(post){
    res.status(204).send();
  }
  else{
    res.status(404).json({error:"Post not found"});
  }
});

postRoutes.post("/",(req,res)=>{//Create
   
  //Validacion explicada por lauti
  if(!req.body.id || !req.body.title || !req.body.author || !req.body.date || !req.body.category || !req.body.content || !req.body.id_vendedor){
    res.status(400).json({error:"Missing data"})
  }
  else{
    const newPost=req.body;
    const duplicatedPost=getById(newPost.id);

    if(duplicatedPost){
      res.status(409).json({ error: "Post with the same id already exists" });
    }else{
      const post = createPost(req.body);
      if (post) {
        res.status(201).json(post);
      } else {
        res.status(500).json({ error: "Error with creating post" });
      }
    }

  }
});

postRoutes.put("/:id",(req,res)=>{//Update
  res.status(200).json(updatePost(Number(req.params.id),req.body));
});

postRoutes.get("/vendedor/:id", (req, res) => {
  const idVendedor = Number(req.params.id);
  res.json(getPostVendedor(idVendedor));
});


postRoutes.post("/asignar", (req, res) => {
  const{id,id_vendedor}=req.body;
  
  if(!id || !id_vendedor){
    res.status(400).json({error:"Missing data"});
  }
  else{
    try{
      const result=asignPostToVendedor(id,id_vendedor);
    res.status(200).json(result);
    } catch(error){
      if(error instanceof Error){
        res.status(404).json({ error: error.message });
      }else{
        res.status(500).json({error:"Internal Error"});
      }
    }
  }
});


export default postRoutes;

