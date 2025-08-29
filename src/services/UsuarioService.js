import Usuario from "../models/Usuarios.js";
import Rol from "../models/roles.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

class UsuarioService {
  static objUsuario = new Usuario();
  static objRol = new Rol();

  // Obtener todos los usuarios
  static async getAllUsuarios() {
    try {
      const usuarios = await this.objUsuario.getAll();

      if (!usuarios || usuarios.length === 0) {
        return { error: true, code: 404, message: "No hay usuarios registrados" };
      }

      // Configurar cada usuario con su rol
      const usuariosConRol = await Promise.all(
        usuarios.map(async (usuario) => await this.#configurarUsuario(usuario))
      );

      return {
        error: false,
        code: 200,
        message: "Usuarios obtenidos correctamente",
        data: usuariosConRol,
      };
    } catch (error) {
      console.error(error);
      return { error: true, code: 500, message: error.message };
    }
  }

  // Obtener un usuario por ID
  static async getUsuarioById(id) {
    try {
      const usuario = await this.objUsuario.getById(id);
      if (!usuario) {
        return { error: true, code: 404, message: "Usuario no encontrado" };
      }

      return {
        error: false,
        code: 200,
        message: "Usuario obtenido correctamente",
        data: await this.#configurarUsuario(usuario),
      };
    } catch (error) {
      return { error: true, code: 500, message: error.message };
    }
  }

  // Crear un usuario nuevo
  static async createUsuario(usuario) {
    try {
      // Validar correo único
      if (await this.objUsuario.getByCorreo(usuario.correo)) {
        return { error: true, code: 409, message: "El correo ya está registrado." };
      }

      // Encriptar contraseña
      usuario.contrasena = usuario.contrasena
        ? await bcrypt.hash(usuario.contrasena, saltRounds)
        : null;

      const usuarioCreado = await this.objUsuario.create(usuario);

      if (!usuarioCreado) {
        return { error: true, code: 400, message: "Error al crear el usuario" };
      }

      return {
        error: false,
        code: 201,
        message: "Usuario creado correctamente",
        data: usuarioCreado,
      };
    } catch (error) {
      return { error: true, code: 500, message: error.message };
    }
  }

  // Actualizar usuario
  static async updateUsuario(id, usuario) {
    try {
      const existente = await this.objUsuario.getById(id);
      if (!existente) {
        return { error: true, code: 404, message: "Usuario no encontrado" };
      }

      if (usuario.contrasena) {
        return {
          error: true,
          code: 409,
          message: "La contraseña no se puede actualizar por este método.",
        };
      }

      const usuarioActualizado = await this.objUsuario.update(id, usuario);

      if (!usuarioActualizado) {
        return { error: true, code: 400, message: "Error al actualizar el usuario" };
      }

      return {
        error: false,
        code: 200,
        message: "Usuario actualizado correctamente",
        data: await this.#configurarUsuario(usuarioActualizado),
      };
    } catch (error) {
      return { error: true, code: 500, message: error.message };
    }
  }

  // Eliminar usuario
  static async deleteUsuario(id) {
    try {
      const usuario = await this.objUsuario.getById(id);
      if (!usuario) {
        return { error: true, code: 404, message: "Usuario no encontrado" };
      }

      const eliminado = await this.objUsuario.delete(id);
      if (!eliminado) {
        return { error: true, code: 400, message: "Error al eliminar el usuario" };
      }

      return { error: false, code: 200, message: "Usuario eliminado correctamente" };
    } catch (error) {
      return { error: true, code: 500, message: error.message };
    }
  }

  // Cambiar contraseña
  static async updateContrasena(id, contrasenas) {
    try {
      const existente = await this.objUsuario.getById(id);
      if (!existente) {
        return { error: true, code: 404, message: "Usuario no encontrado" };
      }

      const valida = await bcrypt.compare(
        contrasenas.contrasena_actual,
        existente.contrasena
      );
      if (!valida) {
        return { error: true, code: 401, message: "La contraseña actual es incorrecta." };
      }

      const nuevaContrasena = await bcrypt.hash(contrasenas.contrasena_nueva, saltRounds);
      const response = await this.objUsuario.update(id, { contrasena: nuevaContrasena });

      if (!response) {
        return { error: true, code: 400, message: "Error al actualizar la contraseña" };
      }

      return { error: false, code: 200, message: "Contraseña actualizada correctamente" };
    } catch (error) {
      return { error: true, code: 500, message: error.message };
    }
  }

  static async getUsuariosAdministradores(){

  }

  // Configuración de usuario (adjuntar rol y quitar contraseña)
  static async #configurarUsuario(usuario) {
    const rol = await this.objRol.getById(usuario.rol);
    usuario.rol = rol || null;

    delete usuario.contrasena;
    return usuario;
  }
}

export default UsuarioService;
