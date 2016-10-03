var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require('path');
var Post = require('../models/post');
var Tag = require('../models/tag');
var Category = require('../models/category');
var User = require('../models/user');
var Featured = require('../models/featured');
var mongoose = require('mongoose');
var async = require('async');

// router.use('/', function (req, res, next) {
//     var cert = fs.readFileSync(path.join(__dirname, 'public.pem'));
//     jwt.verify(req.query.token, cert, {algorithms: ['RS256']}, function(err, payload) {
      
//         if (err) {
//             return res.status(401).json({
//                 title:'Invalid User',
//                 error: err
//             });
//         }
//         next();
//     });
// });

router.post('/', function (req, res, next) {
	console.log(req.body);
	var tags = req.body.tags;
	var post = new Post({
		title: req.body.title,
		body: req.body.body,
		category: req.body.category,
		mainPicture: req.body.mainPicture,
		featured: req.body.featured
	});

	

	if(tags){
		for (var i=0; i<tags.length; i++) {
			post.tags.push(tags[i]);
		}
	}

	post.save(function(err, result){
		
		if(err){
			return res.status(404).json({
				message: "An error Occured",
				error: err
			})
		}

		// set featured post

		Featured.findOne({}, function(err, doc){
			if (!doc){
				var featured = new Featured({
					post: result
				})
				featured.save();
			} else {
				Post.findById(doc.post, function(err, data){
					if(data){
						data.featured = false;
						data.save();
					}
				})
				doc.post = result;
				doc.save();
			}
		})

		// add post to category

		Category.findById(req.body.category, function(err, doc){
			doc.post.push(result);
			doc.save()
		})

		//  add post to tags
		async.each(tags, function(id, callback){
			Tag.findById(id, function(err, doc){
				doc.post.push(result);
				doc.save();
			})
			callback()
		}, function(err){
			if(err){
				console.log(err)
			}
		});

		return res.status(200).json({
			message: "Post Succesfuly saved",
			obj: result
		})
	})
                
});

router.post('/category', function (req, res, next) {
	var category = new Category({
		name: req.body.category
	})

	category.save(function(err, result){
		
		if(err){
			return res.status(404).json({
				message: "An error Occured",
				error: err
			})
		}

		return res.status(200).json({
			message: "category Succesfuly saved",
			obj: result
		})
	})
                
});

router.get('/category', function (req, res, next) {

	Category.find()
		.exec(function(err, result){
			if(err){
				return res.status(404).json({
					message: "An error Occured",
					error: err
				})
			}

			return res.status(200).json({
				message: "category Succesfuly saved",
				obj: result
			})
		})      
});

router.get('/tag', function (req, res, next) {
	Tag.find()
		.exec(function(err, result){
			if(err){
				return res.status(404).json({
					message: "An error Occured",
					error: err
				})
			}

			return res.status(200).json({
				message: "category Succesfuly saved",
				obj: result
			})
		}) 
                
});

router.post('/tag', function (req, res, next) {
	var tag = new Tag({
		name: req.body.tag
	})
	
	tag.save(function(err, result){
		
		if(err){
			return res.status(404).json({
				message: "An error Occured",
				error: err
			})
		}

		return res.status(200).json({
			message: "tag Succesfuly saved",
			obj: result
		})
	})
                
});


module.exports = router;