import  PermisoRol  from "../models/PermisosRol.js";

class PermisoRolService {
   static async getAll() {
    try {
      const permisos_rol = await PermisoRol.getAll();
      return { error: false, code: 200, data: permisos_rol };
    } catch (error) {
      return { error: true, code: 500, message: "Error al obtener permisos y roles" };
    }
  }

   static async getById(id) {
    try {
      const permisos_rol = await PermisoRol.findById(id);
      if (!permisos_rol) return { error: true, code: 404, message: "Permiso y rol no encontrado" };
      return { error: false, code: 200, data: permisos_rol };
    } catch (error) {
      return { error: true, code: 500, message: "Error al buscar permiso y rol" };
    }
  }

   static async create(nombre) {
    try {
      const id = await PermisoRol.create(nombre);
      return { error: false, code: 201, message: "Permiso y rol creado", id };
    } catch (error) {
      return { error: true, code: 500, message: "Error al crear permiso y rol" };
    }
  }

   static async update(id, nombre) {
    try {
      const updated = await PermisoRol.update(id, nombre);
      if (!updated) return { error: true, code: 404, message: "Permiso y rol no encontrado" };
      return { error: false, code: 200, message: "Permiso y rol actualizado" };
    } catch (error) {
      return { error: true, code: 500, message: "Error al actualizar permiso y rol" };
    }
  }

   static async delete(id) {
    try {
      const deleted = await PermisoRol.delete(id);
      if (!deleted) return { error: true, code: 404, message: "Permiso y rol no encontrado" };
      return { error: false, code: 200, message: "Permiso y rol eliminado" };
    } catch (error) {
      return { error: true, code: 500, message: "Error al eliminar Permiso y rol" };
    }
  }
}

export default PermisoRolService;
