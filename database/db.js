import {Sequelize} from 'sequelize'
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_DATABASE } from '../config.js'


const db= new Sequelize({
    username: DB_USERNAME, 
    password: DB_PASSWORD,
    database: DB_DATABASE,
    dialect: 'mysql',
    port: DB_PORT,
    host: DB_HOST,
})

export default db