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
        res.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    await db.query(`DELETE FROM persons where id = $1`, [id])
    res.status(201).send("User was deleted!")
};

export const updateUser = async (req, res) => {
    const {id, firstName, lastName, age} = req.body;
    await db.query(`UPDATE persons SET firstName=$1, lastName=$2, age=$3 WHERE id=$4`, [firstName, lastName, age, id]);
    res.status(200).send("User was updated!")
};
