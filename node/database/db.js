//le estamos diciendo que tipo de database, lenguaje y host de la db, 'database_app' es el nombre que le hemos dado en mysql
import { Sequelize } from "sequelize";

const db = new Sequelize ('database_app', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})

export default db