const products = [
    {
        id: 1,
        title: "Men Casual Round Neck T-Shirt",
        price: "$50",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "images/product1_green_1.jpg",
                thumbnails: [
                    "images/product1_green_2.jpg",
                    "images/product1_green_3.jpg",
                    "images/product1_green_4.jpg"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "Yellow",
                mainImage: "images/product1_yellow_1.jpg",
                thumbnails: [
                    "images/product1_yellow_2.jpg",
                    "images/product1_yellow_3.jpg",
                    "images/product1_yellow_4.jpg"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "Red",
                mainImage: "images/product1_red_1.jpg",
                thumbnails: [
                    "images/product1_red_2.jpg",
                    "images/product1_red_3.jpg",
                    "images/product1_red_4.jpg"
                ],
                sizes: ["S", "M", "L", "XL", "XXL"]
            },
            {
                name: "White",
                mainImage: "images/product1_white_1.jpg",
                thumbnails: [
                    "images/product1_white_2.jpg",
                    "images/product1_white_3.jpg",
                    "images/product1_white_4.jpg"
                ],
                sizes: ["S", "L"]
            },
            {
                name: "Maroon",
                mainImage: "images/product1_maroon_1.jpg",
                thumbnails: [
                    "images/product1_maroon_2.jpg",
                    "images/product1_maroon_3.jpg",
                    "images/product1_maroon_4.jpg"
                ],
                sizes: ["M", "L", "XL"]
            }
        ]
    },
    {
        id: 2,
        title: "Men Slim Fit Turtleneck Sweater",
        price: "$50",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "images/product2_blue_1.jpg",
                thumbnails: [
                    "images/product2_blue_2.jpg",
                    "images/product2_blue_3.jpg",
                    "images/product2_blue_4.jpg"
                ],
                sizes: ["M", "L", "XL"]
            }
        ]
    },
    {
        id: 3,
        title: "Men Striped Polo Shirt",
        price: "$20",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Grey",
                mainImage: "images/product3_grey_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 4,
        title: "Men Casual Long Sleeve Polo",
        price: "$125",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "images/product4_green_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 5,
        title: "Men Western Style Denim Shirt",
        price: "$147",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Black",
                mainImage: "images/product5_black_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 6,
        title: "Men Casual USA Print Tee",
        price: "$80",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Brown",
                mainImage: "images/product6_brown_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 7,
        title: "Men Casual Short Sleeve Polo",
        price: "$62",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "images/product7_blue_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 8,
        title: "Men Summer Leaf Pattern T-Shirt",
        price: "$70",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Green",
                mainImage: "images/product8_green_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 9,
        title: "Men Casual Short Sleeve Polo",
        price: "$62",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "27b94ecWCompressionTBlack_1.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 10,
        title: "Men Casual Short Sleeve Polo",
        price: "$62",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "shopping (4).jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 11,
        title: "Men Casual Short Sleeve Polo",
        price: "$62",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "98919e5c0f758074908230e24a69ca63.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 12,
        title: "Men Casual Short Sleeve Polo",
        price: "$62",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum aut explicabo molestias voluptas, eum nulla doloremque laboriosam. Accusantium omnis illum nulla architecto doloribus.",
        colors: [
            {
                name: "Blue",
                mainImage: "25100BMW_1_de70c3e5-a3ac-49f5-a6a2-72f4b9802d32.jpg",
                thumbnails: [],
                sizes: ["S", "M", "L", "XL", "XXL"]
            }
        ]
    }
];