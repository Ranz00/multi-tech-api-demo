import { Router } from "express";

const router = Router();

// A simple GET endpoint
router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Node.js + TypeScript!" });
});

// A POST endpoint that echoes back what the user sends
router.post("/user", (req, res) => {
  const { name } = req.body;
  res.json({ id: 1, name });
});

export default router;
