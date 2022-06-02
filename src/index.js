const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// initialize the app
const app = express();

//db init (mongoDB)
require("./db/db.connect");

/**JSON init */
app.use(express.json());

const adminRouter = require("./api/routes/admin/admin.router");
const authRouter = require("./api/routes/auth/auth.routes");
const articleRouter = require("./api/routes/articles/articles.routes");
/*api endpoints*/

app.use("/api/v1/admin/users", adminRouter);
app.use("/api/v1/users", authRouter);
app.use("/api/v1/articles/", articleRouter);

/**port init */

const port = process.env.PORT;

/**checking whether the server is running */

app.listen(port, () => console.log(`api running on ${port}`));
