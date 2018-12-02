import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Changer extends Component {
  state = {

  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.currentShelf}
          onChange={(e) => this.props.changeShelf(
            this.props.book, e.target.value
          )}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

Changer.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired
}

export default Changer;