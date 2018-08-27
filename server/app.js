const express = require('express');
const http = require('http');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect(
	'mongodb://graphqlUser:admin123@ds235302.mlab.com:35302/book_list'
);
mongoose.connection.once('open', () => {
	console.log('Connected to database');
});

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3800;

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true
	})
);

server.listen(PORT, () => {
	console.log(`Listening on for request on port ${PORT}`);
});
