import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

class AddBook extends Component {
  displayAuthor() {
    var data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.name}>
            {author.name}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <form id="field">
        <div className="field">
          <label>Book Name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>{this.displayAuthor()}</select>
        </div>

        <buttom>+</buttom>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
