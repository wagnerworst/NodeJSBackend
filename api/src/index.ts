import express, { Request, Response } from 'express';

const app = express();
app.use(express.static("public"))
const port = 3030;

app.get("/", (req: Request, res: Response) : void => {
  res.send("Api em NodeJS com TS");
});

app.get("/bateu", (req: Request, res: Response) => {
  res.send("Pegou")
})

app.get("/soma", (req: Request, res: Response) : void => {
console.log(req.query);

  let {a, b, c} = req.query as { a: string; b: string; c: string };
  let soma: number = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
  res.send(`A soma dos três números é: ${soma.toString()}`);
});

app.get("/departamentos/:id", (req: Request, res: Response) : void => {

  console.log(req.params.id);
});

app.get('/clientes', (req: Request, res: Response):void => {
  
  const html: string = '<link href="css/style.css" rel="stylesheet"><h1>Clientes</h1>';

  res.send(html);  
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});