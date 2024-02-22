import {Sequelize} from 'sequelize'
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_DATABASE } from '../config.js'


const db= new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {  
    dialect: 'mysql',
    host: DB_HOST
})

export default db