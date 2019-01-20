export const atarrayaTypeDef = `
type Product {
    id: Int!
    name: String!
    price: Int!
    tags: [Int]
    description: String
    discountType: Int!
    image_url: [String]!
}

type Tag {
    id: Int!
    name: String!
    image_url: String!
}

type Discount {
    id: Int!
    type: String!
    payload: Float  // cantidad del descuento. Si es del tipo 2x1, entonces payload = 2, si es del tipo Rebaja, entonces payload = 0.5
}

type Recipe {
    id: Int!
    name: String!
    description: String
    timeToPrepare: Int!         // minutos
    difficulty: String!
    quantity: Int!              // para cuántos personas
    ingredients: [Int]!         // ids de los productos Atarraya usados
    otherIngredients: [String]  // productos que no son de la tienda. "Sal al gusto" o cosas así.
    steps: [String]!
    image_url: String!
}

type Purchase {
    id: Int!
    productId: Int!
    userId: Int!
    amount: Int!    // gramos. Puede que haya que definir un tipo Amount para las cantidades preestablecidas (100g, 250g...)
    address: String!
    date: String!   // actually a Date, obviously
}

// oversimplification. Esto obviamente involcura lo de PSE.
type PurchaseInput {
    productId: Int!
    userId: Int!
    amount: Int!
    address: String!
}

type BlogEntry {
    id: Int!
    title: String!
    authorName: String!
    date: String!   // date, again
    text: String!
    hashtags: [String]
}

type UserProfile {
    id: Int!
    name: String!
    addresses: [String]
}
`;

// el atributo "page" es para que el resultado esté paginado y divida el volumen de los datos en distintos grupos de 6 o 12.
export const queries = `
    getProduct(id: Int!): Product!
    getProducts(page: Int, keyword: String): [Product!]
    getPopularProducts: [Product!]      
    getAllDisccountProducts: [Product!]
    usedIn(productId: Int!, page: Int): [Recipe]!

    getTag(tagId: Int!): Tag!

    getRecipe(id: Int!): Recipe!
    getAllRecipes(page: Int): [Recipe!]
    otherRecipes(recipeId: Int!): [Recipe]! // recetas que aparecerían en un "Ver más"
    
    getBlogEntry(id: Int!): BlogEntry!
    getBlogEntries(page: String, hashtag: String): [BlogEntry]!

    getPurchase(id: Int!): Purchase!
    getPurchases(page: String): [Purchase]!
`;

export const mutations = `
    purchase(input: PurchaseInput!): Purchase!
`;
