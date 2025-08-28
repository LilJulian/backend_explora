import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoutes from "./src/routes/authRoutes.js";
import protectedRoutes from "./src/routes/protectedRoutes.js";
import roles from './src/routes/rolRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
})); 
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rutas

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/roles", roles )

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
