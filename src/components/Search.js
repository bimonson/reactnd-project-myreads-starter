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

  checkShelf = (shelf, results) => {
    // For each search result check if it's already been assigned a shelf
    const hashTable = {}
    shelf.forEach(book => hashTable[book.id] = book.shelf)
    results.forEach(book => {
      book.shelf = hashTable[book.id] || 'none'
    })
    return results
  }

  updateSearch = () => {
    if(this.state.query === '') {
      this.setState({error: false, books: []})
      return
    }
    BooksAPI.search(this.state.query)
      .then(response => {
        let searchResults = []
        let searchError = false
        if(response === undefined || (response.error && response.error !== 'empty query')) {
          searchError = true
        } else if (response.length) {
          searchResults = this.checkShelf(this.props.selectedBooks, response)
        }
        this.setState({error: searchError, books: searchResults})
        console.log(searchResults)
      })
  }

  // updateSearch = (q) => {
  //   if(q) {
  //     BooksAPI.search(q)
  //       .then(books => {
  //         // Sets results to empty on error
  //         if(books.error) {
  //           this.setState({books: []})
  //         } else {this.setState({books}) //Sets results retrieved from BooksAPI
  //       }
  //     })
  //   } else {this.setState({books: []})}
  //   console.log(this.state.books)
  // }

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
            {this.state.books && this.state.books
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