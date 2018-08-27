const graphq = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphq;

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genere: { type: GraphQLString }
	})
});

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		age: { type: GraphQLInt }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				//code to get data from db / other source
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
