const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Book = new Schema({
  title: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  book_type: {
    type: String
  }
}, {
  collection: 'books'
})
 
module.exports = mongoose.model('Book', Book)