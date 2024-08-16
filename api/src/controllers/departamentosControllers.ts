import express, { Request, Response } from 'express';
import conexao from '../Services/connection';

export const getDepartamentos = async(req: Request, res: Response) => {
  
  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS');
  res.json(rows);
}

export const postDepartamentos = async(req: Request, res: Response) => {
  const {nome, sigla} = req.body;
  if(nome === undefined || sigla === undefined)
  {
    res.status(400).json({
      message: "Parâmetros inválidos"
    })
  }

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
    })
  }
}
