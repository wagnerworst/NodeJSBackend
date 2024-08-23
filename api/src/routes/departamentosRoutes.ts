import { Router } from "express";
import { getDepartamentos, 
         getDepartamento,
         postDepartamentos, 
         deleteDepartamentos,
         putDepartamentos } from "../controllers/departamentosControllers";
import validaDepartamento from "../middlewares/validaDepartamento";

const router = Router();

router.get("/departamentos", getDepartamentos);
router.get("/departamento/:id", getDepartamento);
router.post("/departamentos", validaDepartamento, postDepartamentos);
router.delete("/departamentos", deleteDepartamentos);
router.put("/departamentos/:id",validaDepartamento, putDepartamentos);



export default router;
