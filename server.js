import express from "express";
import cors from "cors";
import authRouter from "./Router/authRoute";
import bannerRouter from "./Router/bannerRoute";
import productRouter from "./Router/productRoute";
import cartRouter from "./Router/cartRoute";
import orderRouter from "./Router/orderRoute";

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

app.use("/api", authRouter);
app.use("/api", bannerRouter);
app.use("/api", productRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
