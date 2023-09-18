import allPost from "./mock-data";
import allVendedor from "../vendedor/mockVendedor";
import Post from "../types/post";


//------------------------Post
export const getAllPosts = () => {
  return allPost;
};
export const getById = (id: number) => {
  return allPost.find((post) => post.id === id);
}
export const createPost = (post: Post) => {
  return allPost.push(post);
}
export const deletePost = (id: number) => {
  const index = allPost.findIndex((post) => post.id === id);
  allPost.splice(index, 1);
  return id;
}

//I need the id for the search of the id, and equal the post&return
export const updatePost = (id: number, post: Post) => {
  const index = allPost.findIndex((post) => post.id === id);
  return allPost[index] = post;
}

export const getPostVendedor = (idV: number): Post[] => {
  return allPost.filter((post) => post.id_vendedor === idV);
}

export const asignPostToVendedor = (postId: number, vendedorId: number) => {
  const index = allPost.findIndex((post) => post.id === postId);

  if (index!==-1) {
    const vendedor = allVendedor.find((vendedor) => vendedor.id === vendedorId);

    if (!vendedor) {
      throw new Error("Vendedor not found");
    }
    else {
      allPost[index].id_vendedor = vendedorId;
      return allPost[index];
    }
  }else{
    throw new Error("Post not found");
  }

}




