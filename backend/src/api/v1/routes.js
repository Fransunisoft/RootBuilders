// api/v1/routes.js
// Central route aggregator (Version 1)

import express from "express";

import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./users/user.routes.js";
// import resourceRoutes from "./resources/resource.routes.js";
// import projectRoutes from "./projects/project.routes.js";

const router = express.Router();

// Mount all v1 routes here
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
// router.use("/resources", resourceRoutes);
// router.use("/projects", projectRoutes);



export default router;