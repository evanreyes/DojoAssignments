const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board', { useMongoClient: true, });
mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const messageSchema = new Schema({
    name: { type: String, min: [4, 'Name must be at least four characters'] },
    message_text: { type: String, required: [true, 'message field cannot be blank'] },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
    },
    { timestamps: true }
);

const commentSchema = new Schema({
    name: { type: String, min: [4, 'Name must be at least four characters'] },
    _post: { type: Schema.Types.ObjectId, ref: 'Message' },
    comment_text: { type: String, required: [true, 'Comment field cannot be blank'] }
    },
    { timestamps: true }
);

mongoose.model('Message', messageSchema);
mongoose.model('Comment', commentSchema);

const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');

app.get("/", function(req, res){
	Message.find({}, false, true).populate('_comments').exec(function(err, messages){
	      res.render('index', {messages: messages});
	});
});


app.post('/messages/new', function(req, res) {
    console.log(req.body);
    let message = new Message( { name: req.body.name, message_text: req.body.message_text } );
    message.save(function(err) {
      if(err) {
        console.log('Something went wrong with adding your message: ', err);
      }
      else {
        console.log('Successfully created a new message!');
        res.redirect('/');
      }
    })
})

app.post('/messages/add_comment/:id', function(req, res){
	var message_id = req.params.id;
	Message.findOne({_id: message_id}, function(err, message){
		var new_comment = new Comment( { name: req.body.name, comment_text: req.body.comment_text } );
		new_comment._message = message._id;
		Message.update({_id: message._id}, { $push: {'_comments': new_comment} }, function(err){
            if (err) {
                res.redirect('/');
            }
		});
		new_comment.save(function(err){
			console.log('Successfully added a comment!');
			res.redirect('/');
		});
	});
});

const server = app.listen(port, () => console.log(`Listening on port ${ port }`));
