import express from 'express';
import router from "./routes/user-routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))