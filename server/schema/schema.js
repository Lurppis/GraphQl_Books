const graphq = require('graphql');
const _ = require('lodash');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLID
} = graphq;

// dummy data
var books = [
	{ name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
	{ name: 'The final empire', genre: 'Fantasy', id: '2' },
	{ name: 'The long Earth', genre: 'Sci-Fi', id: '3' }
];

var authors = [
	{ name: 'Patrick Rothfuss', age: 44, id: '1' },
	{ name: 'Brandon Sanderson', age: 42, id: '2' },
	{ name: 'Terry Pratchett', age: 66, id: '3' }
];

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString }
	})
});

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Description Test',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				//code to get data from db / other source
				let book = _.find(books, { id: args.id });
				return book;
			}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				let author = _.find(authors, { id: args.id });
				return author;
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
