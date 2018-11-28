import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import Changer from './Changer'

class Book extends Component {
  state = {

  }

  render() {
    const imgUrl = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
    const authors = this.props.book.authors && this.props.book.authors.join(' | ');
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${imgUrl}")`
            }}>
          </div>
          <Changer
            changeShelf = {this.props.changeShelf}
            currentShelf = {this.props.book.shelf}
            book = {this.props.book}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book;