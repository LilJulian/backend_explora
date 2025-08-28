import { campos } from "./fileds.js";
import { validateFields } from '../../validates/validateField';
import { validatePartialFields } from '../../validates/validatePartialFields';

export const validarRol = validateFields(campos);          // Para POST/PUT
export const validarRolParcial = validatePartialFields(campos); // Para PATCH