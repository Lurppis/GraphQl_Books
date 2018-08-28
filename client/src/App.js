import React, { Component } from "react";
import BookList from "./components/BookList";
import AppolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// apollo client setup
const client = new AppolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App" id="main">
          <h1>Rendered List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
