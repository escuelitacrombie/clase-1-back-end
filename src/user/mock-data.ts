import crypto from "crypto";

const allUser = [
  {
    id: crypto.randomUUID(),
    name: "Valentin",
    username: "Sigaudo",
    email: "valesigaudo1@gmail.com",
    phone: "3498529221" 
  },
  {
    id: crypto.randomUUID(),
    name: "Agustin",
    username: "Trossero",
    email: "agustrossero@gmail.com",
    phone: "3546780956"
  },
  {
    id: crypto.randomUUID(),
    name: "Waldemar",
    username: "Gallizi",
    email: "maurowg@gmail.com",
    phone: "3654587690"
  },
];

export default allUser;