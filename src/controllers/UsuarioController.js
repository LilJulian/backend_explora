import { ResponseProvider } from "../providers/ResponseProvider.js";
import UsuarioService from "../Services/UsuarioService.js";


class UsuarioController {

  // Obtener todas las categorías
  static getAllUsuarios = async (req, res) => {    
    try {
      // Llamamos al servicio para obtener las categorías
      const response = await UsuarioService.getUsuarios();   
      // Validamos si no hay categorías
      if (response.error) {        
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(
          res,
          response.message,
          response.code
        );
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta        
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
       }
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  };



}
export default UsuarioController;