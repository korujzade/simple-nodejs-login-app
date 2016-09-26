var users = require('./models/users');

module.exports = {
	configure: function(app) {
		app.post('/login/', function(req,res) {
		username = req.body.username;
		password = req.body.password;

		users.login(username, password, res);
		});
	}
};