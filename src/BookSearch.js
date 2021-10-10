import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class BookSearch extends Component {
  render() {
    const { searchBooks, myBooks, onSearch, onResetSearch, onMove } = this.props;
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <SearchBar onSearch={onSearch} />
        </div>
        <SearchResults
          bookSearch={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default BookSearch;
