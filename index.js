import app from './src/server.js'
import { PORT } from './src/config/index.config.js'
import { conn } from './src/lib/conn.lib.js'

conn
  .sync({ logging: false, force: true })
  .then(() => {
    console.log('Base de datos conectada')
    app.listen(PORT, () => {
      console.log(`Server listening in: http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log('Error en la conexión: ', err.message)
  })
