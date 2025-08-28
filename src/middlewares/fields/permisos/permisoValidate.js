import { validateFields } from '../../validates/validateField';
import { validatePartialFields } from '../../validates/validatePartialFields';
import {campos} from './fields.js';

export const validarPermiso = validateFields(campos);
export const validarPermisosParcial = validatePartialFields(campos);