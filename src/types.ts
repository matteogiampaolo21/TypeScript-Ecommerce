export type Product = {
    readonly id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
export const dummyProduct = {
    id: 0,
    title: "string",
    description: "string",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "strin",
    category: "string",
    thumbnail: "string",
    images: ["string"]
}

export type Quantity = {
    uniqueValues:number[],
    occurrences:number[]
}
export const dummyQuantity = {
    uniqueValues:[],
    occurrences:[]
}

