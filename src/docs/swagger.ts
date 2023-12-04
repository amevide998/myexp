import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
        description:
            'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'JSONPlaceholder',
            url: 'https://jsonplaceholder.typicode.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);