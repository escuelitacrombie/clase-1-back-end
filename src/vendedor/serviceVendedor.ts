import allVendedor from "./mockVendedor";
import Vendedor from "../types/vendedor";


//-------------------------VENDEDOR
export const getAllVendedor = () => {
    return allVendedor;
};
export const getVendedorById = (id: number) => {
    return allVendedor.find((vendedor) => vendedor.id === id);
}
export const createVendedor = (vendedor: Vendedor) => {
    return allVendedor.push(vendedor);
}
export const deleteVendedor = (id: number) => {
    const index = allVendedor.findIndex((vendedor) => vendedor.id === id);
    allVendedor.splice(index,1);
    return id;
}
//I need the id for the search of the id, and equal the post&return
export const updateVendedor = (id: number, vendedor: Vendedor) => {
    const index = allVendedor.findIndex((vendedor) => vendedor.id === id);
    return allVendedor[index] = vendedor;
}
