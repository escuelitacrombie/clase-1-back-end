import crypto from "crypto";
import Seller from "../types/seller";

/** Hardcoded post for now, will use a orm and DB in a future */
const allSellers : Seller[]= [
  {
    id: crypto.randomUUID(),
    name: "nico",
    },
];

export default allSellers;
