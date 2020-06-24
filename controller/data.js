let database = require('../database')
function home(req, res) {
	res.send('ini home web');
}
function listData(req, res) {

	database.listData('tb_user').then(result=>{
		console.log(result)
		res.status(200).json(result)
	})
	
}
function tambahData(res,req){

}
function editData(){

}

function hapusData(){

}

module.exports = { home, listData, tambahData, editData,hapusData }/*untuk bisa di import pada index.js*/

//module.exports={home}