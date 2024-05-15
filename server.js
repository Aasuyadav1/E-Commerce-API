import express from "express";
import cors from "cors";

const corsOptions = {
    origin : process.env.CORS_URL,
    methods : 'GET, POST, PUT, DELETE, PATCH, HEAD',
    credentials : true // allow session cookie from browser
}
const port = process.env.PORT || 5000;
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
