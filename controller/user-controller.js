import db from "../db.js"

export const getUsers = async (req, res) => {
    const users = await db.query(`SELECT * FROM  persons`)
    res.status(200).json({ users: users.rows })
};

export const addUser = async (req, res) => {
    const {firstName, lastName, age} = req.body;
    const queryString = "INSERT INTO persons (firstName, lastName, age) VALUES (" + "'" + [firstName, lastName, age,].join("','") + "'" + ") RETURNING *";
    db.query(queryString,  (error, results) => {
        if (error) {
            console.log(error)
        }
        console.log(results.rows[0])
        res.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}
export const deleteUser = async (req, res) => {
    const id = req.body;
    const users = await db.query(`DELETE FROM persons where id = $1`,[id])
    res.status(200).json({ users: users.rows })
};

export const updateUser = async (req, res) => {
    const {id, firsName,lastName} = req.body;
    const users = await db.query(`UPDATE persons SET firsName= ?, lastName=? WHERE id=1`, [firsName,lastName, id]);
    res.status(200).json({ users: users.rows })
};
