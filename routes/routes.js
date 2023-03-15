import { Router } from "express";
import  {mostrarMenu}  from "../JsBackend/index.js";

const router = Router()

router.get("/",(req, res) =>{
    let menu = mostrarMenu()
    menu = menu.almuerzos
    res.render("index",{menu})
})

export default router