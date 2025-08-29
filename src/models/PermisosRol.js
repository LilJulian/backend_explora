import connection from "../utils/db.js";

 class PermisoRol {
  
  // Obtener todos los registros de la relación
   static async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM permisos_roles");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los permisos_roles");
    }
  }

  // Buscar relación por ID
   static async findById(id) {
    const [rows] = await connection.query(
      "SELECT * FROM permisos_roles WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  // Buscar todas las relaciones de un rol
   static async findByRol(idRol) {
    const [rows] = await connection.query(
      `SELECT * FROM permisos_roles where id_rol = ?`,
      [idRol]
    );
    return rows;
  }

  // Crear nueva relación (rol ↔ permiso)
   static async create(idRol, idPermiso) {
    const [result] = await connection.query(
      "INSERT INTO permisos_roles (id_rol, id_permiso) VALUES (?, ?)",
      [idRol, idPermiso]
    );
    return result.insertId;
  }

  // Actualizar relación
   static async update(id, idRol, idPermiso) {
    const [result] = await connection.query(
      "UPDATE permisos_roles SET id_rol = ?, id_permiso = ? WHERE id = ?",
      [idRol, idPermiso, id]
    );
    return result.affectedRows;
  }

  // Eliminar relación
   static async delete(id) {
    const [result] = await connection.query(
      "DELETE FROM permisos_roles WHERE id = ?",
      [id]
    );
    return result.affectedRows;
  }
}

export default PermisoRol;
