import express, { Request, Response } from 'express';

const rootResponse = (req: Request, res: Response) : void => {
  res.send("Api em NodeJS com TS");
}

export default rootResponse;