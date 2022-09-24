import db from "../db.js"

export const getUsers = async (req, res) => {
    const users = await db.query(`SELECT * FROM  persons`)
    res.json(users.rows);
    res.json({ users: users })
}