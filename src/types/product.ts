type Product = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  seller: string | undefined
};

export default Product;
