import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Changer from './Changer'

class Book extends Component {
  state = {

  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")'
              }}>
            </div>
            <Changer/>
          </div>
          <div className="book-title">The Adventures of Tom Sawyer</div>
          <div className="book-authors">Mark Twain</div>
        </div>
      </li>
    )
  }
}

export default Book;