import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import bookRoutes from './routes/bookRoutes.js'
import requestTime from './middleware/queryMiddleware.js'
import errorHandler from './middleware/errorMiddleware.js'
dotenv.config()
const port = process.env.PORT || 3000

const app = express()

app.use(requestTime)
app.use(express.json())

app.get('/', (req, res) => {
  const responseText = 'Hello World!'

  res.send(responseText)
})

app.use('/api/users', userRoutes)
app.use('/api/books', bookRoutes)
app.get('*', function (req, res) {
  res.status(404).send("Sorry the route you accessed, doesn't exist")
})

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
