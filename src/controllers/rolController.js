import ResponseProvider from "../providers/ResponseProvider.js";
import RolService from "../services/rolService.js";

class RolController {
  static getAllRoles = async (req, res) => {
    try {
      const response = await RolService.getAll();
      if (response.error) {
        return ResponseProvider.error(res, response.message, response.code);
      }
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  static getRolById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await RolService.getById(id);
      if (response.error) {
        return ResponseProvider.error(res, response.message, response.code);
      }
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  static createRol = async (req, res) => {
    try {
      const { nombre } = req.body;
      const response = await RolService.create(nombre);
      if (response.error) {
        return ResponseProvider.error(res, response.message, response.code);
      }
      return ResponseProvider.success(res, { id: response.id }, response.message, response.code);
    } catch (error) {
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  static updateRol = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const response = await RolService.update(id, nombre);
      if (response.error) {
        return ResponseProvider.error(res, response.message, response.code);
      }
      return ResponseProvider.success(res, null, response.message, response.code);
    } catch (error) {
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  static deleteRol = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await RolService.delete(id);
      if (response.error) {
        return ResponseProvider.error(res, response.message, response.code);
      }
      return ResponseProvider.success(res, null, response.message, response.code);
    } catch (error) {
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };
}

export default RolController;
