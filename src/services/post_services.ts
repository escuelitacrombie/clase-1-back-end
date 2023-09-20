import db from "../config/db";
export const createPost = async (post: any) => {
  try {
    const results = await db
      .promise()
      .query(
        `INSERT INTO publicacion (contenido, id_usuario,imagen ) VALUES ('${post.contenido}', '${post.id_usuario}', '${post.imagen}')`
      );
    return results;
  } catch (error) {
    console.log(error);
  }
};



export const deletePost = async ( id:number)=>{
  try {
    const results = await db
      .promise()
      .query(
        `DELETE * FROM publicacion WHERE id= ${id}`
      );
    return results;
  } catch (error) {
    console.log(error);
  }
}