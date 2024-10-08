import express, { Request, Response } from 'express';
import conexao from '../Services/connection';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export const getDepartamento = async(req: Request, res: Response) => {
  const {id} = req.params
  console.log(id);
  try
  {
    const [rows] = await conexao.execute<RowDataPacket[]>('SELECT * FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = ?',
      [id]
    );
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

export const getDepartamentos = async(req: Request, res: Response) => {
  
  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
};

export const postDepartamentos = async(req: Request, res: Response) => {
  const {nome, sigla} = req.body;
  try
  {
    const [result] = await conexao.execute(
      'INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (?, ?)',
      [sigla, nome]
    );

    res.status(201).json({
      message: "Departamento criado"
    })
  }
  catch (e)
  {
    res.status(500).json({
      message: "Erro na criação"
    });
  }
};

export const deleteDepartamentos = async(req: Request , res: Response) => {
  const {id} = req.body;  
  try
  {
    const [result] = await conexao.execute<ResultSetHeader>(
      'DELETE FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = ?',
      [id]
    );
    
    if(result.affectedRows === 0)
    {
      res.json({
        message: "Departamento excluido",
        id
      })
      return;
    }
    else
    {
      res.status(201).json({
        message: "Departamento apagado."
      })
      return;
    }
  }

  catch (e)
  {
    let message:string = '';
    switch(e.code)
    {
      case('ER_ROW_IS_REFERENCED_2'):
      {
        message = "Id invalido, informe um dado NUMERICO maior que ZERO.";
      }
      break;
      default:
      message= `My sql error: ${e}`;
    }
    res.status(400).json({
      resultDelete: message
    });
    return;
  }
};

export const putDepartamentos = async(req: Request, res: Response) => {
  const {nome, sigla} = req.body;
  const {id} = req.params;
  try
  {
    const [result] = await conexao.execute(
      'UPDATE DEPARTAMENTOS SET sigla=?, nome=? WHERE ID_DEPARTAMENTO=?',
      [sigla, nome, id]
    );

    res.status(201).json({
      message: "Departamento atualizado"
    })
  }
  catch (e)
  {
    res.status(500).json({
      message: "Erro na atualização",
      e
    });
  }
};