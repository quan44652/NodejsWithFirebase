// swagger.js
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task API',
      version: '1.0.0',
      description: 'A simple Express Task API'
    },
    servers: [
      {
        url: 'http://localhost:8080/api', // Thay thế bằng URL của bạn
      },
    ],
  },
  apis: ['./routes/*.js'], // Đường dẫn đến file chứa tài liệu API
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
