const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

const { categoryType } = require('./category');
const model = require('../../model');

const bookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Represents a book of the catalog.',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The book unique id.',
      resolve: book => book._id
    },
    title: {
      type: GraphQLString,
      description: 'The book title.',
      resolve: book => book.title
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