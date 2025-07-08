import express from "express";
import { authenticate, authorize } from "../middlewares/auth.js";
const Router = express.Router();
import {
  register,
  login,
  profile,
  updateUser,
  deleteUser,
  showUsers,
} from "../controllers/userController.js";
Router.post("/register", register);
Router.post("/login", login);
// Router.get("/showusers", authenticate, authorize("admin"), showUsers);
Router.get("/:id/profile", authenticate, profile)
Router.patch("/:id/profile", authenticate,  updateUser);
Router.patch("/:id/password", authenticate, updateUser);
Router.get("/api/users", authenticate, authorize("admin"), showUsers);
Router.get("/api/users/:id", authenticate, showUsers);
Router.patch("/api/users/:id", authenticate, authorize("admin"), updateUser);

Router.delete("/:id", authenticate, authorize("admin"), deleteUser);
// Router.get("/:id/profile", authenticate, profile);
export default Router;