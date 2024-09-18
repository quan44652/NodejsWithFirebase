import express from "express";
import routeTask from "./routes/task.js";
import setupSwagger from './swagger.js'

const app = express();

app.use(express.json());

// Swagger setup
setupSwagger(app);

// Routes
app.use("/api", routeTask);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
