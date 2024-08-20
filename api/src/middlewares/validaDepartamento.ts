import { NextFunction, Request, Response } from "express-serve-static-core";

const validaDepartamento = (req: Request, res: Response, next: NextFunction): void =>
{
  const {nome, sigla} = req.body;

  if(
    (typeof nome !== 'string' || nome.trim() === '' )
    || (typeof sigla !== 'string' || sigla.trim() === '')
    )
  {
    res.status(400).json({
      message: "Campos inválidos"
    });
    return;
  }

  next();
}

export default validaDepartamento;