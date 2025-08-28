import { ResponseProvider } from "../../providers/ResponseProvider.js";
import jwt from 'jsonwebtoken';

const secretKey = process.env.ACCESS_TOKEN_SECRET;

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) return ResponseProvider.error(res, "Token no encontrado", 401, "TOKEN_MISSING");

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return ResponseProvider.error(res, 'Token expirado', 401, 'TOKEN_EXPIRED');
        }
        console.log(err);
        
        return ResponseProvider.error(res, 'Token inválido', 401, 'TOKEN_INVALID');
    }
}