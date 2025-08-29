import express from "express";

import UsuarioController from "../controllers/usuarioControllador.js";
// import { validarContrasena, validarDesactivar, validarUsuario, validarUsuarioParcial } from "../middlewares/entities/usuarios/usuarioValidator.js";
import authenticate from "../middlewares/auth/authenticate.js";
import authorize from "../middlewares/auth/authorize.js";

const router = express.Router();

// Obtener el propio
// router.get("/me", authenticate, authorize('usuario.view-own'), UsuarioController.getUsuarioMe);

// // Actualizar el propio usuario
// router.put("/me", authenticate, authorize('usuario.update-own'), validarUsuario, UsuarioController.updateUsuarioMe);

// // Actualizar la contraseña del usuario
// router.put("/me/contrasena", authenticate, authorize('usuario.update-own'), validarContrasena, UsuarioController.updateContrasenaMe);

// // Desactivar la cuenta del usuario
// router.put("/me/desactivar", authenticate, authorize('usuario.disable-own'), validarDesactivar, UsuarioController.updateDesactivarMe);


// Obtener usuarios administrativos
// router.get("/administrativos", authenticate, authorize('usuario.view'),  UsuarioController.getUsuariosAdministrativos);

// Obtener todos los usuarios
router.get("/", UsuarioController.getAllUsuarios);

// Obtener un usuario por ID
router.get("/:id", authenticate, authorize('usuarios.view'), UsuarioController.getUsuarioById);

// Crear un nuevo usuario
// router.post("/", authenticate, authorize('usuarios.create'), validarUsuario, UsuarioController.createUsuario);

// // Actualizar un usuario
// router.put("/:id", authenticate, authorize('usuarios.update'), validarUsuario, UsuarioController.updateUsuario);

// // Actualizar un usuario parcialmente
// router.patch("/:id", authenticate, authorize('usuarios.update'), validarUsuarioParcial, UsuarioController.updateUsuario);

// Eliminar un usuario
router.delete("/:id", authenticate, authorize('usuarios.delete'), UsuarioController.deleteUsuario);


export default router;