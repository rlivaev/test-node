import * as pg from 'pg'
const { Pool } = pg.default

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    port: 5432,
    password:"admin"
})

export default pool;
