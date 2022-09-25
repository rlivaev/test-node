import db from "../db.js"

export const getUsers = async (req, res) => {
    const users = await db.query(`SELECT * FROM  persons`)
    res.status(200).json({ users: users.rows })
};
export const addUsers = async (req, res) => {

    console.log('rus')
    // const {firstName,lastName,age, isFree, reatedAt, pdatedAt} = req.body;
    // const users = await db.query(`INSERT INTO * persons(firstName, lastName, age, isFree, reatedAt, pdatedAt ) values ($1, $2, $3, $4, $5, $6) RETURNING *`,[firstName, lastName, age, isFree, reatedAt, pdatedAt]);
    // res.status(200).json({ users: users.rows })
}
export const deleteUsers = async (req, res) => {
    const id = req.body;
    const users = await db.query(`DELETE FROM persons where id = $1`,[id])
    res.status(200).json({ users: users.rows })
};
export const updateUsers = async (req, res) => {
    const {id, firsName,lastName} = req.body;
    const users = await db.query(`UPDATE persons SET firsName= ?,lastName=? WHERE id=1`,[firsName,lastName, id]);
    res.status(200).json({ users: users.rows })
};
