const mysql = require('mysql')
const express = require('express')
const { faker } = require('@faker-js/faker')

const config = {
   host: 'db',
   user: 'root',
   password: 'root',
   database: 'node_db'
}

const app = express()
const port = 3000

const createTable = async () => {
   const connection = await mysql.createConnection(config)

   const sql = "CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))"
   await connection.query(sql)

   await connection.end()
}

const insert = async () => {
   const connection = await mysql.createConnection(config)

   const name = `${faker.person.fullName()}`
   const sqlInsert = `INSERT INTO people(name) values('${name}')`

   await connection.query(sqlInsert)

   await connection.end()
}

const list = async () => {
   const connection = await mysql.createConnection(config)
   const data = await new Promise((res, rej) => {
      connection.query('SELECT name FROM people ORDER BY name ASC', (err, results) => {
         if (err) return rej(err);
         res(results);
      });
   });

   await connection.end();

   return data;
}

createTable()
insert()

app.get('/', (req, res) => {
   const print = [];
   print.push('<h1>Full Cycle Rocks!</h1>');

   const result = list()

   result.then((itens) => {
      for (let item of itens) {
         print.push(`<p>${item.name}</p>`)
      }

      res.send(print.join(''))
   })

})


app.listen(port, () => {
   console.log('Rodando na porta ' + port)
})