import express from 'express'
import { configDotenv } from 'dotenv'

configDotenv()
const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
	return res.send('ok')
})

// app.use((err, req, res, next) => {

// })

export default app
