//importamos la conexion a la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

//[Metido dentro de una constante que podaos exportar luego] Traemos la tabla por nombre y los campos de la tabla por nombre de cada columna y tipo de atributo; db.define llama a la database(tabla) a usar y en () el nombre de la tabl y los campoo
const BlogModel = db.define('blogs', {
    title: { type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default BlogModel