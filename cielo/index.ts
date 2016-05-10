import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
let xmlParser = require("express-xml-bodyparser");

let app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(xmlParser());
app
  .get("/", (requisicao: express.Request, resposta: express.Response, proxima: express.NextFunction) => {
    resposta.status(200).send("Hello-world!");
  });
app.listen(3000, () => console.log("Running on port 3000"));
