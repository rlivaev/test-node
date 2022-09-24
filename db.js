import * as pg from 'pg';
const { Pool } = pg;

const db = async () => {
    console.log("pepsi");
    try {
        const pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "testdb",
            port: 5432
        })
        await client.connect()
        console.log(res)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}

export default db;
