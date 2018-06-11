const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: 'asdf'}).then((todo) => {
    
});

Todo.findByIdAndRemove('asdf').then((todo) => {

});