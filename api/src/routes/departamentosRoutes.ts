import { Router } from "express";
import { getDepartamentos, postDepartamentos, deleteDepartamentos } from "../controllers/departamentosControllers";

const router = Router();

router.get("/departamentos", getDepartamentos);
router.post("/departamentos", postDepartamentos);
router.delete("/departamentos", deleteDepartamentos);

export default router;
