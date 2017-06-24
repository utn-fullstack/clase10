const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} = require('graphql');

const { categoryType } = require('./category');
const { nodeInterface } = require('../node');
const model = require('../../model');

const bookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Represents a book of the catalog.',
  interfaces: [nodeInterface],
  isTypeOf: obj => obj._id.substr(0, 2) === 'BK',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The book unique id.',
      resolve: book => book._id
    },
    title: {
      type: GraphQLString,
      description: 'The book title.'
    },
    type: {
      type: GraphQLString,
      description: 'The book title.',
      resolve: () => "BK"
    },
    author: {
      type: GraphQLString,
      description: 'The author name.'
    },
    image: {
      type: GraphQLString,
      description: 'The book cover.'
    },
    categories: {
      type: new GraphQLList(categoryType),
      description: 'The book categories.',
      resolve: book => model.category.getByIds(book.categories)
    }
  })
});

exports.bookType = bookType;