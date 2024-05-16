import zod from "zod";

const productSchema = zod.object({
    productName: zod
        .string({required_error: "Product name is required"}),

    price: zod
        .number({required_error: "Price is required"}),
    
    description: zod
        .string({required_error: "Description is required"}),

    category: zod
        .string({required_error: "Category is required"}),

    image: zod
        .string({required_error: "Image is required"}),
    
    quantity: zod
        .number({required_error: "Quantity is required"})

})

export {productSchema}