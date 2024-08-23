import express from 'express';
import defaultRoutes from './routes/defaultRoutes'
import departamentosRoutes from './routes/departamentosRoutes'
import funcionariosRoutes from './routes/funcionariosRoutes'
import cors from 'cors';

const app = express();
const port = 3030;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(defaultRoutes);
app.use(departamentosRoutes);
app.use(funcionariosRoutes);


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
