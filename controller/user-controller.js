import db from "../db.js"

class userController{
    async createUser(req,res) {
        const {firstName, lastName} = req.body;
        const newPerson = await db.query(`INSERT INTO persons (firstName lastName) value ($1, $2) RETURNING * `,[firstName, lastName]);
        res.json(newPerson);
    }
    async getUsers(req, res) {
        console.log("hi");
        // const users = await db.query(`SELECT * FROM  persons`)
        // res.json(users.rows);
    };
    async updateUser(req, res) {
        const {id, firstName,lastName, isFree,createdAt,updatedAt} = req.body;
        const user = await db.query(`UPDATE persons set firstName = $1, lastName = $2, id = $3 RETURNING *`,[firstName,lastName,id])
        res.json(user.rows[0]);
    }
    async deleteUser(req, res) {
        const id  =req.params.id
        const user = await db.query(`DELETE * FROM persons where id = $1`,[id])
        res.json(user.rows[0])
    }
}

export default userController;