"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepartamentos = exports.postDepartamentos = exports.getDepartamentos = void 0;
const connection_1 = __importDefault(require("../Services/connection"));
const getDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield connection_1.default.query('SELECT * FROM DEPARTAMENTOS');
    res.json(rows);
});
exports.getDepartamentos = getDepartamentos;
const postDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, sigla } = req.body;
    try {
        const [result] = yield connection_1.default.execute('INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (?, ?)', [sigla, nome]);
        res.status(201).json({
            message: "Departamento criado"
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Erro na criação"
        });
    }
});
exports.postDepartamentos = postDepartamentos;
const deleteDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const [result] = yield connection_1.default.execute('DELETE FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = ?', [id]);
        if (result.affectedRows === 0) {
            res.json({
                message: "Departamento excluido",
                id
            });
            return;
        }
        else {
            res.status(201).json({
                message: "Departamento apagado."
            });
            return;
        }
    }
    catch (e) {
        let message = '';
        switch (e.code) {
            case ('ER_ROW_IS_REFERENCED_2'):
                {
                    message = "Id invalido, informe um dado NUMERICO maior que ZERO.";
                }
                break;
            default:
                message = `My sql error: ${e}`;
        }
        res.status(400).json({
            resultDelete: message
        });
        return;
    }
});
exports.deleteDepartamentos = deleteDepartamentos;
//# sourceMappingURL=departamentosControllers.js.map