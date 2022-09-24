import db from "../db"

class userController{
    async createUser(req,res) {
        const {firstName, lastName} = req.body;
        const newPerson = await db.query(`INSERT INTO persons (firstName lastName) value ($1, $2) RETURNING * `,[firstName, lastName]);
        res.json(newPerson);
    }
    async getUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

export default userController;