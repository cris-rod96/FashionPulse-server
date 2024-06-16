import express, { json } from 'express'
import cors from 'cors'
import logger from 'morgan'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())
app.use(json())
app.use(cors())
app.use(logger('dev'))

export default app
