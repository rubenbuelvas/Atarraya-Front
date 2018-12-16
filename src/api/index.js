export const data = [
    {
        id: 1,
        name: "Filete de salmón",
        weight: "250g",
        price: "12500",
        available: 10,
        image_url: '/images/pescado.png',
        tags: [0, 1]
    },

    {
        id: 2,
        name: "Filete de mojarra",
        weight: "250g",
        price: "12500",
        available: 10,
        image_url: '/images/pescado.png',
        tags: [0]
    },
]

export const recipes = [
    {
        id: 0,
        title: 'Hamburguesas de salmón',
        imageUrl: '/stock/hamburguesa-salmon.png'
    },
    {
        id: 1,
        title: 'Salmón a la parrilla con vegetales',
        imageUrl: '/stock/hamburguesa-salmon.png'
    },
    {
        id: 2,
        title: 'Ensalada cítrica de salmón',
        imageUrl: '/stock/hamburguesa-salmon.png'
    }
]

export const tags = [
    {
        key: 'Internacional',
        text: 'Chileno',
        imageUrl: '/icons/mundo.png'
    },
    {
        key: 'Congelado',
        text: 'Congelado',
        imageUrl: '/icons/congelado.png'
    }
]