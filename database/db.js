import {Sequelize} from 'sequelize'
import { DB_URL } from '../config.js'


const db= new Sequelize ( DB_URL, {
    dialect: 'mysql'
})

export default db