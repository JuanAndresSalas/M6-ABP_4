import express from "express";
import hbs from "hbs";
import {dirname,join} from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/routes.js";

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set("view engine", "hbs")

app.use(express.static("public"))

hbs.registerPartials(join(__dirname,"views/partials"))


app.use(indexRoutes)
app.listen(3000, function(){
    console.log("Servidor en puerto 3000")
})