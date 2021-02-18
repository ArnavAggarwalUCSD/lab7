var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', projects);
};

exports.viewAlt = function(req, res){
	data["viewAlt"] = true;
	res.render("index", data);
}