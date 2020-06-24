const express=require('express')
var bodyParser = require('body-parser')

const userontroller = require('./controller/data')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


/*app.get('/',function(req,res){
	res.send("hello word")
})*/
/*
	============untuk memanggil module
*/
app.get('/', userontroller.home)
app.post('/input-data', userontroller.tambahData)
app.get('/list-data', userontroller.listData)
app.put('/ubah-data', userontroller.ubah-data)


/*config  express*/
app.use(express.static('public'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))