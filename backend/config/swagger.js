import schemas from "../docs/schemas/index.js"
import paths from "../docs/paths/index.js"

export default {
    openapi: "3.0.0",
    info: {
        title: "Menulize Backend APIs",
        description: "All Apis for system",
        version: "0.0.1",
        license: {
            name: "Vrutik Prajapati",
            url: "https://github.com/vrutik2809",
        },
    },
    servers: [
        {
            url: "http://localhost:8080",
            description: "Development server",
        },
        {
            url: "https://menulize-backend.onrender.com",
            description: "Production server",
        }
    ],
    tags: [
        {
            name: "Auth",
            description: "API to manage authentication",
        },
        {
            name: "Category",
            description: "API to manage category routes",
        },
        {
            name: "Product",
            description: "API to manage product routes",
        },
        {
            name: "Table",
            description: "API to manage table routes",
        },
        {
            name: "Order",
            description: "API to manage order routes",
        },
        {
            name: "User",
            description: "API to manage user routes",
        }
    ],
    components: {
        securitySchemes: {
            Bearer: {
                type: "apiKey",
                bearerFormat: "JWT",
                in: "header",
                name: "Authorization",
                description: "Enter the token with the `Bearer` prefix, e.g. 'Bearer jwt-token-here'",
            },
        },
        schemas: {
            ...schemas,
        },
    },
    paths: {
        ...paths,
    },
    apis: [ "./routes/*.js" ],
}
