import {Pool} from "pg"

const db = async () => {
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
