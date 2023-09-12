import Seller from "../types/seller";
import allSellers from "./mock-dataSeller";

export const getAllSeller = () => {
  return allSellers;
};

export const getSellerById = (id: string) => {
  return allSellers.find((s) => s.id === id);
};

export const createSeller = (s: Seller) => {
  allSellers.push(s);
  return allSellers;
};

export const updateSeller = (id: string, s: Seller) => {
  const index = allSellers.findIndex((seller) => seller.id === id);
  allSellers[index] = s;
  return s;
};

export const deleteSeller = (id: string) => {
  const index = allSellers.findIndex((s) => s.id === id);
  allSellers.splice(index, 1);
  return id;
};


