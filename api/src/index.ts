import express, { Request, Response } from 'express';
import defaultRoutes from './routes/defaultRoutes'
import departamentosRoutes from './routes/departamentosRoutes'

const app = express();
const port = 3030;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(defaultRoutes);
app.use(departamentosRoutes);


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
