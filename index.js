import express from "express";
import routeTask from "./routes/task.js";

const app = express();

app.use(express.json());
app.use("/api", routeTask);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
