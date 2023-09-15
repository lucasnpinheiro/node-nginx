const express = require('express')
const mysql = require('mysql')
const { faker } = require('@faker-js/faker')

const config = {
   host: 'db',
   user: 'root',
   password: 'root',
   database: 'node_db'
}

const app = express()
const port = 3000

const query = async (sql) => {
   const connection = await mysql.createConnection(config)
   const data = await new Promise((res, rej) => {
      connection.query(sql, (err, results) => {
         if (err) return rej(err);
         res(results);
      });
   });

   await connection.end();

   return data;
}

const setup = async () => {
   await query("CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))")
}

const insert = async () => {
   const name = `${faker.person.fullName()}`
   const sql = `INSERT INTO people(name) values('${name}')`
   await query(sql)
}

const list = async () => {
   const sql = `SELECT name FROM people ORDER BY name ASC`
   const data = await query(sql)
   return data;
}

setup()
   .then(() => { })
   .catch((err) => { console.log(err) })

app.get('/', async (req, res) => {
   const print = [];
   print.push('<h1>Full Cycle Rocks!</h1>');

   await insert()
   const result = await list()

   for (let item of result) {
      print.push(`<p>${item.name}</p>`)
   }

   res.send(print.join(''))
})


app.listen(port, () => {
   console.log('Rodando na porta ' + port)
})