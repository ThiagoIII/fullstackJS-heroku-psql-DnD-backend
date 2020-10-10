const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()


app.use(cors({origin: 'https://salty-thicket-65996.herokuapp.com/'}))
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, ()=> {
	process.env.PORT != undefined ? console.log(`server at port ${process.env.PORT}`) : console.log('server at port 3333')
})