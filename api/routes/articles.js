const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/article');
//const Comment = require('../models/comment')
console.log("API")
//GET all articles
router.get('/', (req, res, next) => {

  Article.find()
	.exec()
	.then(docs => {
	  res.status(200).json(docs)
	})
	.catch(err => {
	  res.status(500).json({
		error: err
	  })
	})
})
/*

//GET articles by ID
router.get('/:articleId', (req, res, next) => { 
	id = req.params.articleId;
	Article.findById(id)
	.exec()
	.then(doc => {
		if (doc) {
			res.status(200).json(doc);
		};
		if (!doc) {
			res.status(404).json({
				message: 'Article not found :('
			});
		};
	})
	.catch(err => {
		res.status(500).json({
			error: err
		});
	});
});

router.post('/', (req, res, next) =>{
	const article = new Article({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
   		description: req.body.description,
   		link: req.body.link,
   		createAt: new Date(),
  		category: req.body.category,
  		thumbnailUrl: req.body.thumbnailUrl
	});
	article
		.save()
		.then(result => {
			res.status(201).json({
				message: "Artículo creado con éxito",
				createdArticle: result
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			})
		});
});

router.delete('/:articleId', (req, res, next) => {
	const id = req.params.articleId;
	Article.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: "Artículo eliminado",
				deletedArticle: result
			})
		})
		.catch(err => {
			res.status(500).json({
				error: err
			})
		});
})

//COMMENTS 
/*
router.get('/', (req, res, next) => {
	Comment.find()
	  .exec()
	  .then(docs => {
		res.status(200).json(docs)
	  })
	  .catch(err => {
		res.status(500).json({
		  error: err
		})
	  })
  });
  
  router.post('/', (req, res, next) =>{
	const comment = new Comment({
		_id: new mongoose.Types.ObjectId,
		userId: req.body.userId,
		articleId: req.params.articleId,
		text: req.body.text,
		createAt: new Date()
	});
    comment
		.save()
		.then(result => {
			res.status(201).json({
				message: "Comentario creado con éxito",
				createdComment: result
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
		})
	});
});*/

module.exports = router;