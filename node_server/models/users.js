var connection = require('../connection');

function User() {

	this.login = function(username, password, res) {
		connection.acquire(function(err, con) {
			con.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(err, result) {
				if (typeof username != 'undefined' || typeof password != 'undefined') {
					console.log("username: " + username + " password: " + password);
					if (err) {
						res.send(
							{
								"success": false, 
								"payload": {}, 
								"error": {
									"code": 1,
									"message": "something is not right"
								}
							}
						);
					} else {
						if(result.length > 0) {
							res.send(
								{
									"success": true, 
									"payload": {
										"message": "successfully logged in"
									}, 
									"error": {}
								}
							);
						} else {
							res.send(
								{
									"success": false, 
									"payload": {}, 
									"error": {
										"code": 2,
										"message": "username or password is not correct"
									}
								}
							);
						}
					}

				} else {
					res.send(
						{
							"success": false, 
							"payload": {}, 
							"error": {
								"code": 1,
								"message": "something is not right"
							}
						}
					);
				}
				
			});
		});
	};


}

module.exports = new User();
