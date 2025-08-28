import express from 'express';
import RolController from '../controllers/rolController.js';


const router = express.Router();

// Obtener todos los roles
router.get("/", RolController.getAllRoles);

// Obtener un rol por ID
router.get("/:id", RolController.getRolById);

// Crear un rol
router.post("/", RolController.createRol);

// Actualizar un rol
router.put("/:id", RolController.updateRol);

// Eliminar un rol
router.delete("/:id", RolController.deleteRol);


export default router;