import { NextFunction, Request, Response } from "express-serve-static-core";

const validaDepartamento = (req: Request, res: Response, next: NextFunction): void =>
{
  const {nome, sigla} = req.body;
  const {id} = req.params;

  if(req.method === "PUT")
  {
    if((typeof nome !== 'string' || nome.trim() === '' ) || (typeof sigla !== 'string' || sigla.trim() === ''))
      {
        res.status(400).json({
          message: "Campos inválidos."
        });
        return;
      }
  }
  
  if(req.method === "POST")
  {
    if(isNaN(Number(id)))
      {
        res.status(400).json({
          message: "Id inválido, informe um dado numérico."
        });
        return;
      }
  }


  next();
}

export default validaDepartamento;