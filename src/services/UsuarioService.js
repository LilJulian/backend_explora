import Usuario from "../models/Usuarios.js";

class UsuarioService { 

  static async getUsuarios()
  { 
    try {
      const usuarioInstance = new Usuario();
      const usuarios = await usuarioInstance.getAll();
      // Validamos si no hay usuarios      
      if (usuarios.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay usuarios registrados",
        };
      }      
      // Retornamos las categorías obtenidas
      return {
        error: false,
        code: 200,
        message: "Categorías obtenidas correctamente",
        data: usuarios,
      };
    } catch (error) {      
      return {
        error: true,
        code: 500,
        message: "Error al obtener las categorías",
      };
    }
  }



}

export default UsuarioService;