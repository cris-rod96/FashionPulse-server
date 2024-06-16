import { URI_DATABASE } from '../config/index.config.js'
import { Sequelize } from 'sequelize'

const conn = new Sequelize(URI_DATABASE, { logging: false, native: false })

export { conn }
