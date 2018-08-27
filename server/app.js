const express = require('express');
const http = require('http');
const graphqlHTTP = require('express-graphql');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3800;

app.use('/graphql', graphqlHTTP({}));

server.listen(PORT, () => {
	console.log(`Listening on for request on port ${PORT}`);
});
