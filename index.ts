import express from "express"
import bodyParser from "body-parser"
import exampleRouter from './src/routes/example.router.js'
import swaggerUi from 'swagger-ui-express'
import {swaggerSpec} from "./src/docs/swagger"
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/example', exampleRouter)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.listen(8080, ()=>{
    console.log('server running on port 8080')
})




