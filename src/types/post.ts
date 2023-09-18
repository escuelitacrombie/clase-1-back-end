type Post = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  id_vendedor:number; //Tiro corte con undefined uso el ? y listo
};



export default Post;