"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosControllers_1 = require("../controllers/departamentosControllers");
const router = (0, express_1.Router)();
router.get("/departamentos", departamentosControllers_1.getDepartamentos);
router.post("/departamentos", departamentosControllers_1.postDepartamentos);
router.delete("/departamentos", departamentosControllers_1.deleteDepartamentos);
exports.default = router;
//# sourceMappingURL=departamentosRoutes.js.map