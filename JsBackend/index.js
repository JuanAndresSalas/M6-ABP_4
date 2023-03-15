import fs from "fs"

export function mostrarMenu(){
    let menu = fs.readFileSync("./menu.json")
    return JSON.parse(menu)
}