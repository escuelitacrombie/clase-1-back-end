import crypto from "crypto";
import Seller from "../types/seller";

/** Hardcoded post for now, will use a orm and DB in a future */
const allSellers : Seller[]= [
  {
    id: crypto.randomUUID(),
    name: "nico",
    lastName: "muller",
    dni: 43378154
  },
  {
    id: crypto.randomUUID(),
    name: "Ana",
    lastName: "García",
    dni: 38201678,
  },
  {
    id: crypto.randomUUID(),
    name: "Juan",
    lastName: "Pérez",
    dni: 29014567
  }
];

export default allSellers;
