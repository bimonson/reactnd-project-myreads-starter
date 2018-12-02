import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Changer from './Changer'

class Book extends Component {
  state = {

  }

  render() {
    const imgUrl = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'https://dummyimage.com/128x192/f3f3f3/000000.jpg&text=Cover+Missing';
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

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Book;