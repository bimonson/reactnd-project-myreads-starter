import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksApp from '../App'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  queryTimer = null;

  changeQuery = (query) => {
    // Update the query then wait a quarter second to update search
    clearTimeout(this.queryTimer);
    this.setState({query});
    this.queryTimer = setTimeout(this.updateSearch(query), 250);
  }

  updateSearch = (q) => {
    if(q) {
      BooksAPI.search(q)
        .then(results => {
          // Sets results to empty on error
          if(results.error) {
            this.setState({results: []})
          } else {this.setState({results}) //Sets results retrieved from BooksAPI
        }
      })
    } else {this.setState({resluts: []})}
    console.log(this.state.results)
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.changeQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default Search;