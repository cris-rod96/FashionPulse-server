import app from './src/server.js'
import { PORT } from './src/config/index.config.js'

app.listen(PORT, () => {
  console.log(`Server listening in: http://localhost:${PORT}`)
})
