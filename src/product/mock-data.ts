

const allProduct = [
  {
    id: "1",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    date: "1967",
    category: "Drama",
    content: "Una obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo de Macondo.",
    user_id: "1"
  },
  {
    id: "2",
    title: "Drácula",
    author: "Bram Stoker",
    date: "1897",
    category: "Terror",
    content: "La novela que dio origen al mito del vampiro, cuenta la historia del conde Drácula y su lucha contra un grupo de personas que intentan destruirlo.",
    user_id: "1"
  },
  {
    id: "3",
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    date: "1813",
    category: "Romance",
    content: "Una novela clásica que explora las complejidades del amor y las relaciones sociales en la Inglaterra del siglo XIX, a través de la historia de Elizabeth Bennet y Mr. Darcy.",
    user_id: "2"
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    date: "1949",
    category: "Ciencia Ficción",
    content: "Una distopía que presenta un futuro totalitario donde el Estado controla cada aspecto de la vida de las personas.",
    user_id: "2"
  },
  {
    id: "5",
    title: "Matar a un ruiseñor",
    author: "Harper Lee",
    date: "1960",
    category: "Drama",
    content: "La historia de la niña Scout Finch y su padre Atticus, un abogado que defiende a un hombre negro acusado injustamente de violación en el sur de Estados Unidos.",
    user_id: "2"
  },
  {
    id: "6",
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    date: "1997",
    category: "Fantasía",
    content: "El inicio de la saga de Harry Potter, un joven mago que descubre su verdadera identidad y se adentra en el mundo de la magia.",
    user_id: "1"
  },
  {
    id: "7",
    title: "El Gran Gatsby",
    author: "F. Scott Fitzgerald",
    date: "1925",
    category: "Drama",
    content: "La historia de Jay Gatsby y su obsesión por recuperar un amor perdido en la alta sociedad de la década de 1920.",
    user_id: "1"
  },
  {
    id: "8",
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    date: "2008",
    category: "Ciencia Ficción",
    content: "En un futuro distópico, Katniss Everdeen se convierte en el símbolo de una revuelta contra un gobierno opresivo al participar en los Juegos del Hambre.",
    user_id: "1"
  },
  {
    id: "9",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    date: "1605",
    category: "Aventura",
    content: "Las aventuras del caballero Don Quijote y su fiel escudero Sancho Panza mientras luchan contra gigantes imaginarios y molinos de viento.",
    user_id: "3"
  },
  {
    id: "10",
    title: "El Hobbit",
    author: "J.R.R. Tolkien",
    date: "1937",
    category: "Fantasía",
    content: "La historia de Bilbo Bolsón, un hobbit que se embarca en una aventura para recuperar un tesoro guardado por el dragón Smaug.",
    user_id: "1"
  },
  {
    id: "11",
    title: "Moby-Dick",
    author: "Herman Melville",
    date: "1851",
    category: "Aventura",
    content: "La obsesiva búsqueda del capitán Ahab por vengarse de la gran ballena blanca, Moby Dick.",
    user_id: "3"
  },
  {
    id: "12",
    title: "Los miserables",
    author: "Victor Hugo",
    date: "1862",
    category: "Drama",
    content: "La historia de Jean Valjean, un exconvicto que busca la redención mientras es perseguido por el inspector Javert en la Francia del siglo XIX.",
    user_id: "1"
  },
  {
    id: "13",
    title: "Rayuela",
    author: "Julio Cortázar",
    date: "1963",
    category: "Experimental",
    content: "Una novela experimental que invita al lector a decidir el orden en que lee los capítulos, explorando la mente de su protagonista, Horacio Oliveira.",
    user_id: "3"
  },
  {
    id: "14",
    title: "En busca del tiempo perdido",
    author: "Marcel Proust",
    date: "1913",
    category: "Clásico",
    content: "Una monumental obra que narra la vida y reflexiones del narrador en busca del tiempo perdido a través de sus recuerdos y experiencias.",
    user_id: "2"
  },
  {
    id: "15",
    title: "El Señor de los Anillos",
    author: "J.R.R. Tolkien",
    date: "1954",
    category: "Fantasía",
    content: "La épica lucha de Frodo Baggins y su compañía para destruir el Anillo Único y derrotar al Señor Oscuro Sauron.",
    user_id: "1"
  },
  {
    id: "16",
    title: "Ulises",
    author: "James Joyce",
    date: "1922",
    category: "Experimental",
    content: "Una novela experimental que sigue a Leopold Bloom durante un día en Dublín, explorando la vida y la conciencia humana.",
    user_id: "3"
  },
  {
    id: "17",
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    date: "2001",
    category: "Misterio",
    content: "Una historia que comienza cuando un joven llamado Daniel Sempere descubre un libro en el Cementerio de los Libros Olvidados.",
    user_id: "2"
  },
  {
    id: "18",
    title: "Mujer en punto cero",
    author: "Nawal El Saadawi",
    date: "1975",
    category: "Feminismo",
    content: "La historia de una prisionera egipcia llamada Firdaus, que enfrenta la pena de muerte y busca la libertad en un sistema opresivo.",
    user_id: "3"
  },
  {
    id: "19",
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    date: "1943",
    category: "Infantil",
    content: "Un cuento infantil que narra el encuentro de un piloto varado en el desierto con un pequeño príncipe de otro planeta.",
    user_id: "2"
  },
  {
    id: "20",
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    date: "1981",
    category: "Drama",
    content: "La historia de Santiago Nasar, quien es asesinado en un pequeño pueblo después de que se anunciara su muerte.",
    user_id: "3"
  },{
    id: "21",
    title: "Explorando las maravillas del mundo",
    author: "Alice Johnson",
    date: "2023-09-11",
    category: "Viajes",
    content:
      "Hoy tuve la increíble oportunidad de explorar las pirámides de Egipto. Estas antiguas estructuras son verdaderamente asombrosas y llenas de historia.",
    user_id:"3",
  },
  {
    id: "22",
    title: "Descubriendo la vida marina",
    author: "Emily Turner",
    date: "2023-09-08",
    category: "Naturaleza",
    content:
      "Hoy hice una excursión de buceo y tuve la oportunidad de ver tortugas marinas, delfines y corales coloridos. ¡La vida marina es asombrosa!",
    user_id:"2",
  },
  {
    id: "23",
    title: "Desarrollando una aplicación web con Node.js",
    author: "David Smith",
    date: "2023-09-09",
    category: "Desarrollo Web",
    content:
      "En este tutorial, aprenderemos a desarrollar una aplicación web completa utilizando Node.js, Express y MongoDB. ¡Espero que te sea útil!",
    user_id:"2",
  },{
    id: "24",
    title: "Receta del día: Tacos de pescado",
    author: "Carlos Rodríguez",
    date: "2023-09-10",
    category: "Comida",
    content:
      "Los tacos de pescado son una deliciosa opción para la cena. Mezcla pescado fresco con limón, cilantro y salsa picante para obtener un sabor explosivo.",
    user_id:"3",
  }
  
];

export default allProduct;
