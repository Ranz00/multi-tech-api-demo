import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());

// Attach our routes under /api
app.use("/api", routes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Node API running at http://localhost:${PORT}/api`);
});
