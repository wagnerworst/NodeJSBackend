"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const defaultRoutes_1 = __importDefault(require("./routes/defaultRoutes"));
const departamentosRoutes_1 = __importDefault(require("./routes/departamentosRoutes"));
const app = (0, express_1.default)();
const port = 3030;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(defaultRoutes_1.default);
app.use(departamentosRoutes_1.default);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map