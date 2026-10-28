const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'laboratorio_db',
  password: 'admin',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Error al conectar a PostgreSQL:', err.stack);
  } else {
    console.log('Conectado exitosamente a PostgreSQL en Docker');
  }
});

module.exports = pool;