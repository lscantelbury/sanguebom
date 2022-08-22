import "dotenv/config";
import express from "express";

import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use(routes);
app.get("/test", async (request, response) => {
    return response.json({ message: "Hello World" });
})

app.listen(process.env.PORT, () => {
    console.log("Server is running in port", process.env.PORT);
});
