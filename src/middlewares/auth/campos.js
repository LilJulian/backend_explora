export const campos = [
  {
    name: "nombre",
    required: true,
    minLength: 3,
    maxLength: 40
  },
  {
    name: "correo",
    required: true,
    minLength: 6,
    maxLength: 40,
    type: "email",
  },
  {
    name: "telefono",
    required: true,
    minLength: 6,
    maxLength: 40,
    type: "int"
  },
  {
    name: "contrasena",
    required: true,
    minLength: 6,
    maxLength: 40
  }
];