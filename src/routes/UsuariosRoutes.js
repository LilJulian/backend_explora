import express from "express";
import UsuarioController from "../controllers/UsuarioController.js";


const router = express.Router();
// Creamos una instancia del controlador

// Obtener todas las categorías
router.get("/", UsuarioController.getAllUsuarios);


export default router;