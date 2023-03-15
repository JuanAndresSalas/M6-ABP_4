import { Router } from "express";
import  {borrarPlato, crearPlato, mostrarMenu}  from "../JsBackend/functions.js";

const router = Router()

router.get("/",(req, res) =>{
    let menu = mostrarMenu()
    menu = menu.almuerzos
    res.render("index",{menu})
})

router.get("/index", (req, res) =>{
    let menu = mostrarMenu()
    menu = menu.almuerzos
    res.render("index",{menu})
})

router.get("/crear", (req, res) =>{
    res.render("crear")
})

router.get("/formCrear", (req, res) =>{
    let nombre = req.query.nombre
    let precio = req.query.precio
    crearPlato(nombre,precio)    
    res.send('<script>alert("Plato Creado"); window.location.href = "/index";</script>');
    
})

router.get("/eliminar", (req, res) =>{
    res.render("eliminar")
})

router.get("/formEliminar", (req, res) =>{
    let nombrePlato = req.query.nombre
    borrarPlato(nombrePlato)
    res.send('<script>alert("Plato Eliminado"); window.location.href = "/index";</script>');
})

export default router