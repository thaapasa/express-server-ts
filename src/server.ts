console.log("Starting server")

import * as express from "express"
import { api } from "./api";
import * as bodyParser from "body-parser"
import * as compression from "compression"

const serverPort = 3500

const server = express()
server.use(compression())
server.use(bodyParser.json())

server.use("/api", api)

server.listen(serverPort, () => {
  console.log(`Server started at port ${serverPort}`)
})
