const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

/*init app */
const app = express()

// apis
const adminRouter = require("./api/routes/admin/admin.router")
const authRouter = require("./api/routes/auth/auth.routes")
const articleRouter = require("./api/routes/articles/articles.routes")
/*db init */
require("./db/db.connect")

app.use(express.json())

/*api endpoints */
app.use("/api/v1/articles/", articleRouter)
app.use("/api/v1/users", authRouter)
app.use("/api/v1/admin/users", adminRouter)

const port = process.env.PORT

app.listen(port, () => console.log(`api running on ${port}`))
