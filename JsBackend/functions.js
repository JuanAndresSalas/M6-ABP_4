import fs from "fs"


export function mostrarMenu(){
    let menu = fs.readFileSync("./menu.json")
    return JSON.parse(menu)
}

export function crearPlato(nombre,precio){
    let menu = JSON.parse(fs.readFileSync("./menu.json"))
    let nuevoPlato = {nombre:nombre, precio:parseInt(precio)}
    menu.almuerzos.push(nuevoPlato)
    fs.writeFileSync("menu.json", JSON.stringify(menu))
}

export function borrarPlato(nombre){
    let menu = JSON.parse(fs.readFileSync("./menu.json"))
    menu.almuerzos.splice(menu.almuerzos.indexOf(plato => plato.nombre == nombre),1)
    fs.writeFileSync("menu.json", JSON.stringify(menu))
}