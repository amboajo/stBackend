var mysql= require ('mysql');

var connection =mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database: 'learnnode'
});

// buka koneksi ke data base mysql
connection.connect(function(err){
	if (err) {
		console.log(err);
	}else {
		console.log('Koneksi dengan id'+connection.threadId);
	}
});

function insertData(tableName, data) {
	var insert_sql='insert into '+tableName+' set ?';
	return new Promise((resolve, reject) => {
		connection.query(insert_sql, data, function(err,result){
			if(err) {
				reject(err)
			} else {
				resolve(result)
			}
		})
	})
}

function caridata(username, password) {
	var insert_sql= 'select * from tb_user where username = ? and password = ? and email = ?';
	return new Promise((resolve, reject) => {
		connection.query(insert_sql, [username, password], function(err,result){
			if(err) {
				reject(err)
			} else {
				resolve(result)
			}
		})
	})
}

function listData(tableName){
	var list_sql='select * from ' + tableName;
	return new Promise((resolve,reject)=>{
		connection.query(list_sql,function(err,result){
			if (err) {
				reject(err)
			}else{
				resolve(result)
			}
		})
	})
}




module.exports = { insertData, caridata, listData, connection }
