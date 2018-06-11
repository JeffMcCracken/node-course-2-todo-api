const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5b1de66ee7f986483d45f437';

// if (!ObjectID.isValid(id)) {
//     return console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos\n', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo\n', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID\n', todo);
// })

var userID = '5b1d932f2f4ec9e830f62cc8';

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('User not found');
    }

    console.log('User\n', JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));