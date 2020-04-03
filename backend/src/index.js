const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);








/**
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar informações no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar um informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * Qurey: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar 
  */

  /**
   * SQL: MySQL, SQLite,PostgreSQL, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELEC * FROM users
    * Query builder: table('users')
    */