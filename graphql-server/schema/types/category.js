const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const categoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Represents a category of books',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The category unique id.',
      resolve: obj => obj._id
    },
    label: {
      type: GraphQLString,
      description: 'Category label.'
    }
  })
});

exports.categoryType = categoryType;
