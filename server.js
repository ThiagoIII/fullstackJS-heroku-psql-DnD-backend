const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, ()=> {
	process.env.PORT != undefined ? console.log(`server at port ${process.env.PORT}`) : console.log('server at port 3333')
})