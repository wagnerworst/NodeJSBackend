import { Router } from "express";
import { getDepartamentos, postDepartamentos, deleteDepartamentos } from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";

const router = Router();

router.get("/departamentos", getDepartamentos);
router.post("/departamentos", validaDepartamento, postDepartamentos);
router.delete("/departamentos", deleteDepartamentos);

export default router;
