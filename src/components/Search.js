import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  queryTimer = null

  changeQuery = (query) => {
    // Update the query then wait a quarter second to update search
    clearTimeout(this.queryTimer)
    this.setState({query})
    this.queryTimer = setTimeout(this.updateSearch, 250)
  }

  checkShelf = (shelf, books) => {
    // For each search result check if it's already been assigned to a shelf
    const hashTable = {}
    shelf.forEach(book => hashTable[book.id] = book.shelf)
    books.forEach(book => {
      book.shelf = hashTable[book.id] || 'none'
    })
    return books
  }

  updateSearch = () => {
    if(this.state.query === '') {
      this.setState({error: false, books: []})
      return
    }
    BooksAPI.search(this.state.query)
      .then(response => {
        let searchError = false
        if(response === undefined || (response.error && response.error !== 'empty query')) {
          searchError = true
        } else if (response.length) {
          this.setState({error: searchError, books: response})
        }
      })
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
          <ol className="books-grid">
          {this.checkShelf(this.props.shelvedBooks, this.state.books)
            .map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    changeShelf={this.props.changeShelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;