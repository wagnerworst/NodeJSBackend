import { Router } from "express";
import { getDepartamentos, postDepartamentos } from "../controllers/departamentosControllers";

const router = Router();

router.get("/departamentos", getDepartamentos);
router.post("/departamentos", postDepartamentos);

export default router;
