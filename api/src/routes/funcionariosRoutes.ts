import { Router } from "express";
import { getFuncionariosDepartamentos } from "../controllers/funcionariosControllers";

const router = Router();

router.get("/funcionarios/departamentos", getFuncionariosDepartamentos);

export default router;