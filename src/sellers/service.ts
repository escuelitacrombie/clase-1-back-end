import allSellers from "./mock-data"

export const getAllSellers = () => {
    return allSellers
}

export const getSellerById = (id: string) => {
    return allSellers.find((seller) => seller.id === id)
}

export const createSeller = (seller: any) => {
    allSellers.push(seller)
    return seller
}

export const updateSeller = (id: string, seller: any) => {
    const index = allSellers.findIndex((seller) => seller.id === id)
    allSellers[index] = seller
    return seller
}

export const deleteSeller = (id: string) => {
    const index = allSellers.findIndex((seller) => seller.id === id)
    allSellers.splice(index, 1)
    return id
}