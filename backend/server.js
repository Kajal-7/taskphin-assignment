import express from 'express'
import candidateRoutes from './routes/candidateRoutes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({}))

app.use('/api/candidate', candidateRoutes)


app.listen(8080, () => {
    console.log("Listening on port 8080...")
})