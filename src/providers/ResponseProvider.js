class ResponseProvider {
  /**
   * 
   * @param {*} res 
   * @param {*} data 
   * @param {*} message 
   * @param {*} status 
   * @returns 
   */
  static success(res, data, message = "Operación exitosa", status = 200) {
    return res.status(status).json({
      success: true,
      code: status,
      message,
      data,
    });
  }

  /**
   * 
   * @param {*} res 
   * @param {*} message 
   * @param {*} status 
   * @returns 
   */
  static error(res, message = "Error interno del servidor", status = 500, erros = []) {
    return res.status(status).json({
      success: false,
      code: status,
      message,
      erros: erros
    });
  }

    static authError(res, message = "Error de autenticación de token", status = 401, authError) {
    return res.status(status).json({
      success: false,               // Indica que la operación falló
      code: status,                 // Código de estado HTTP para referencia
      message,                      // Mensaje descriptivo del error de token
      authError                    // Detalle específico del error de token (opcional)
    });
  }
}

export default ResponseProvider