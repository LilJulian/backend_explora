import Permiso from "../models/Permisos.js";
import PermisoRol from "../models/PermisosRol.js";
import Rol from "../models/roles.js";
import Usuario from "../models/Usuarios.js"; // Asegúrate de tener este modelo

 const getPermisos = async (userId) => {
  const usuario = await Usuario.findById(userId);
  if (!usuario) return [];

  const rol = await Rol.findById(usuario.rol_id);
  if (!rol) return [];

  // Obtiene todos los permisos asociados al rol del usuario
  const relaciones = await PermisoRol.getAllByRolId(usuario.rol_id);

  const permisos = await Promise.all(
    relaciones.map(async (rel) => {
      const permisoInfo = await Permiso.getById(rel.permiso_id);
      return permisoInfo ? permisoInfo.nombre : null;
    })
  );

  // Elimina nulos y duplicados
  return [...new Set(permisos.filter((p) => p))];
};

export default getPermisos;
