const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// initialize the app
const app = express();

//db init
require("./db/db.connect");

app.use(express.json());

const adminRouter = require("./api/routes/admin/admin.router");

/*api endpoints*/

app.use("/api/v1/admin/users", adminRouter);

const port = process.env.PORT;

app.listen(port, () => console.log(`api running on ${port}`));
