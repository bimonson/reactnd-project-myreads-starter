import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/BookCase'
import Search from './components/Search'
import PageNotFound from './components/PageNotFound'


class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  // Update the books on shelves
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => this.setState((state) => ({
        books: state.books.concat(state.books.filter((b) => b.id === book.id && b.s !== book.shelf)
        .map(book => (
          book.shelf = shelf
        )))
      }))
    )
  }

  render() {


    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <BookCase
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}/>
          <Route path="/search" render={() => (
            <Search
              shelvedBooks={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}/>
          <Route render={() => (
              <PageNotFound/>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
