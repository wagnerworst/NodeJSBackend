import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
//NECESSÁRIO ARQUIVO .ENV DO TIPO DOTENV Q TENHA OS DADOS ABAIXO
const conexao = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.PASS,
  database: process.env.NAME
});

conexao.getConnection().then(connection => {
  console.log('Conectado a base de dados.')
  connection.release();
}).catch(err => {
  switch(err.code) {
    case 'ENOTFOUND':
      console.error('[ERROR] Host inválido')
    break;
    case 'ER_BAD_DB_ERROR':
      console.error('[ERROR] Base de dados não existe')
    break;
    case 'ER_ACCESS_DENIED_ERROR':
      console.error('[ERROR] Erro de autenticação')
    break;
    default:
      console.error('[ERROR]', err)
    break;
  }  
})

export default conexao;