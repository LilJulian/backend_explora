import express from "express";

import PermisoRolController from "../controllers/permisoRolController.js";



const router = express.Router();

// Obtener todas las relaciones permiso-rol
router.get("/", PermisoRolController.getAllPermisosRoles);

// Obtener una relación permiso-rol por ID
router.get("/:id", PermisoRolController.getPermisoRolById);

// Crear una nueva relación permiso-rol
router.post("/", PermisoRolController.createPermisoRol);

// Actualizar una relación permiso-rol
router.put("/:id", PermisoRolController.updatePermisoRol);

// Actualizar una relación permiso-rol parcialmente
router.patch("/:id", PermisoRolController.updatePermisoRol);

// Eliminar una relación permiso-rol
router.delete("/:id",PermisoRolController.deletePermisoRol);

export default router;