const express = require('express')
const router = require('./config/routes')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use('/', router)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World'})
})

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path} from ${req.ip}`)
  next()
})
