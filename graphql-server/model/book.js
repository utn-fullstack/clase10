const mongo = require("./mongo");
const shortid = require("shortid");

const newBookId = () => "BK-" + shortid.generate();

exports.add = book => mongo.collection("books")
  .then(col => {
    book._id = newBookId();
    return col.insert(book);
  });

exports.update = book => mongo.collection("books")
  .then(col => {
    return col.findOneAndUpdate({ _id: book._id }, book);
  });

exports.remove = id => mongo.collection("books")
  .then(col => {
    return col.remove({ _id: id });
  });

exports.getAll = () => mongo.collection("books")
  .then(col => {
    return col.find().toArray();
  });

exports.getById = id => mongo.collection("books")
  .then(col => {
    return col.findOne({ _id: id });
  });

exports.getByCategoryId = id => mongo.collection("books")
  .then(col => {
    return col.find({ categories: id }).toArray();
  });