import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookCase extends Component {

  // Filter books according to shelf
  filterShelf = () => {
    const wantToRead = {
      name: 'Want to Read',
      books: this.props.books.filter(book => book.shelf === 'wantToRead')
    };
    const currentlyReading = {
      name: 'Currently Reading',
      books: this.props.books.filter(book => book.shelf === 'currentlyReading')
    };
    const read = {
      name: 'Read',
      books: this.props.books.filter(book => book.shelf === 'read')
    };

    return ([wantToRead, currentlyReading, read]);
  }

  render () {
    let shelves = [];
    if (this.props.books && this.props.books.length)
      shelves = this.filterShelf();

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {shelves && shelves.map((shelf) => (<BookShelf
                key={shelf.name}
                shelf={shelf}
                changeShelf={this.props.changeShelf}
              />))}
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
    )
  }
}

export default BookCase;