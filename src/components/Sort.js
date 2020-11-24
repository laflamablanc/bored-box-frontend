import React, { Component } from 'react';

class Sort extends Component {

  changeHandler = (e) => {
      this.props.sortGames(e.target.value)
  }

  render() {
    return (
      <nav>
        <h2>Sort By:</h2>
        <select onChange={this.changeHandler}>
          <option value="All">(None)</option>
          <option value="Price-Hi">Price: Lo</option>
          <option value="Price-Lo">Price: Hi</option>
          <option value="Rating">Rating</option>
          <option value="Popularity">Popularity</option>
          <option value="Max-Players">Max Players</option>
        </select>
      </nav>
    );
  }

}

export default Sort;
