import { Router } from "express";
import { getAllVendedor,getVendedorById,deleteVendedor,createVendedor,updateVendedor } from "./serviceVendedor";

const vendedorRoutes = Router();

vendedorRoutes.get("/", (req, res) => {//Get all
    res.json(getAllVendedor());
});

vendedorRoutes.get("/:id", (req, res) => {//Get by one id
    const post=getVendedorById(Number(req.params.id));
    if(!post){
      res.status(404).json({Error:"Post not found"});
    }
    else{
      res.json(post);
    }
  });
  
  vendedorRoutes.delete("/:id",(req,res)=>{//Delete
    const post=deleteVendedor(Number(req.params.id));
    if(post){
      res.status(204).send();
    }
    else{
      res.status(404).json({error:"Post not found"});
    }
  });
  
  vendedorRoutes.post("/",(req,res)=>{//Create
   //Validacion explicada por lauti
  if(!req.body.id || !req.body.name || !req.body.email){
    res.status(400).json({error:"Missing data"})
  }
  else{
    const newVendedor=req.body;
    const duplicatedV=getVendedorById(newVendedor.id);

    if(duplicatedV){
      res.status(409).json({ error: "Vendedor with the same id already exists" });
    }else{
      const vendedor = createVendedor(req.body);
      if (vendedor) {
        res.status(201).json(vendedor);
      } else {
        res.status(500).json({ error: "Error with creating post" });
      }
    }

  }
  });
  
  vendedorRoutes.put("/:id",(req,res)=>{//Update
    res.status(200).json(updateVendedor(Number(req.params.id),req.body));
  });
  


export default vendedorRoutes;