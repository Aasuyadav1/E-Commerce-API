import express from "express";
import cors from "cors";
import authRouter from "./Router/authRoute.js"
import bannerRouter from "./Router/bannerRoute.js";
import productRouter from "./Router/productRoute.js";
import cartRouter from "./Router/cartRoute.js";
import orderRouter from "./Router/orderRoute.js";
import adminRouter from "./Router/adminRoute.js"

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
app.use("/api", adminRouter);


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
