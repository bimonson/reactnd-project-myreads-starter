import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/BookCase'


class BooksApp extends Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  // Update the books on shelves
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then(books => this.setState({books}))
    .catch(error => console.log(error))
    console.log(this.state.books);
  }




  render() {


    return (
      <div className="app">
        <BookCase
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      </div>
    )
  }
}

export default BooksApp
