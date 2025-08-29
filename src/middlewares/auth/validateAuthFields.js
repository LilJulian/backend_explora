import { campos, camposLogin } from "../fields/usuarios/fields.js";
import { validateFields } from "../validates/validateField.js";

export const validarRegistro = validateFields(campos);
export const validarLogin = validateFields(camposLogin);