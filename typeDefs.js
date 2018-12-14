export const atarrayaTypeDef = `
type Product {
    id: Int!
    name: String!
    price: Int!
    disccountPrice: Int!
    imageURL: String!
}

type Recipe {
    id: Int!
    name: String!
    text: String!
    imageURL: String!
}
`;

export const authorsQueries = `
    getProduct(id: Int!): Product!
    getAllProducts: [Product!]
    getPopularProducts: [Product!]
    getAllDisccountProducts: [Product!]
    getRecipe(id: Int!): Recipe!
    getAllRecipes: [Recipe!]
`;

export const authorsMutations = `
    createProduct(product: Product!): Product!
    updateProduct(id: Int!, product: Product!): Product!
    removeProduct(id: Int!): Boolean
    createRecipe(recipe: Recipe!): Recipe!
    updateRecipe(id: Int!, recipe: Recipe!): Recipe!
    removeRecipe(id: Int!): Boolean
`;