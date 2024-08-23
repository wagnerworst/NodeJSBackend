import express, { Request, Response } from 'express';
import conexao from '../Services/connection';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export const getFuncionariosDepartamentos = async(req: Request, res: Response) => {
  try
  {
    const [rows] = await conexao.execute<RowDataPacket[]>('SELECT 	f.nome AS "Nome",	d.nome AS "Departamento" FROM funcionarios f INNER JOIN departamentos d	ON f.id_departamento = d.id_departamento ORDER BY 1 ASC');
    res.json(rows);
  }
  catch(e)
  {
    {
      res.status(500).json({
        message: "Erro na consulta",
        e
      });
    }
  }

};