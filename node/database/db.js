//le estamos diciendo que tipo de database, lenguaje y host de la db, 'database_app' es el nombre que le hemos dado en mysql
import { Sequelize } from "sequelize";

const db = new Sequelize ('database_app', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})

export default db

//IMPORTANTE, al crear la DB en XAMPP hay que especificar que el numero 1 de los ids(o de la tabla) tenga auto-incremento para que las nuevas entradas se vayan registrando en orden: estructura> accion, cambiar> marcar A.I> guardar