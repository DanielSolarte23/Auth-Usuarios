import { Router } from "express";
import { login, register, logout, profile, verifyToken } from "../controller/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js"
import { registerShema, loginShema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register', validateSchema(registerShema), register); // Configurado como POST
router.post('/login', validateSchema(loginShema), login);       // Configurado como POST
router.post('/logout', logout);       // Configurado como POST

router.get("/verify", verifyToken) //Metodo Get
router.get("/profile", authRequire, profile) //Metodo Get

export default router;



