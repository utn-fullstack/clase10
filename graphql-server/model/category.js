const mongo = require("./mongo");
const shortid = require("shortid");

const newCatId = () => "CA-" + shortid.generate();

exports.getAll = () => mongo.collection("categories")
  .then(col => {
    return col.find().toArray();
  });

exports.getById = id => mongo.collection("categories")
  .then(col => {
    return col.findOne({ _id: id });
  });

exports.getByIds = ids => mongo.collection("categories")
  .then(col => {
    return col.find({ _id: { $in: ids } }).toArray();
  });
