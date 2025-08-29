

import roles from './rolRoutes.js';
import permisos from './permisoRoutes.js';
import permisosRoles from './permisosRolesRoutes.js';

const rutas = [
    { path: '/roles', router: roles }, 
    { path: '/permisos', router: permisos },
    
    { path: '/permisosRoles', router: permisosRoles }, 
];

export default rutas