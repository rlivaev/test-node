import db from "../db"

class userController{

    async createUser(req,res) {
        const{firstName, lastName} = req.body;
        console.log(firstName, lastName);
        res.json("ok")
    }
    async getUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

export default userController;