import { createPool } from 'mysql2/promise';

const db = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'zgzgym',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export { db };
