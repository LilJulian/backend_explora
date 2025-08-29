import roles from './rolRoutes.js';
import permisos from './permisoRoutes.js';
import permisosRoles from './permisosRolesRoutes.js';
import usuarios from './usuariosRoutes.js'

const rutas = [
    { path: '/roles', router: roles }, 
    { path: '/permisos', router: permisos },
    { path: '/permisosRoles', router: permisosRoles }, 
    { path: '/usuarios', router: usuarios }, 
];

export default rutas