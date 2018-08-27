const graphq = require('graphql');
const _ = require('lodash');
const {
	GraphQLObjectType, // Allow to Create Schema Type e.g. BoomType
	GraphQLString, // String type for graphQl
	GraphQLInt, // Int type for graphQL
	GraphQLSchema, // Object that create Schema
	GraphQLID, // ID type for graphQL
	GraphQLList
} = graphq;
const Book = require('../models/book');
const Author = require('../models/author');

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args) {}
		}
	})
});

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {}
		},
		books: {
			type: GraphQLList(BookType),
			resolve(parent, args) {}
		},
		authors: {
			type: GraphQLList(AuthorType),
			resolve(parent, args) {}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
