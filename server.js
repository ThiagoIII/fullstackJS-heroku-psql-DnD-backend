const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()



app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');

		next();
	
});
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, ()=> {
	process.env.PORT != undefined ? console.log(`server at port ${process.env.PORT}`) : console.log('server at port 3333')
})