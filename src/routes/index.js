import authRoutes from "./authRoutes.js";
import protectedRoutes from "./protectedRoutes.js";
import roles from './rolRoutes.js';
import permisos from './permisoRoutes.js';
import permisosRoles from './permisosRolesRoutes.js';

const rutas = [
    { path: '/roles', router: roles }, 
    { path: '/permisos', router: permisos }, 
    { path: '/auth', router: authRoutes }, 
    { path: '/protected', router: protectedRoutes }, 
    { path: '/permisosRoles', router: permisosRoles }, 
];

export default rutas