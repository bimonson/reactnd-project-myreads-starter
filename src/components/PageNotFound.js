import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class PageNotFound extends Component {
  render () {
    return (
      <div className="pagenotfound">
        <h1>R2-404</h1>
        <div className="pagenotfound-giphy">
          <iframe src="https://giphy.com/embed/4560Nv2656Gv0Lvp9F" className="giphy-embed" allowFullScreen title="Jedi mind trick"></iframe>
        </div>
        <p><a href="https://giphy.com/gifs/cinemagraph-4560Nv2656Gv0Lvp9F">via GIPHY</a></p>
        <h2>These aren't the droids you're looking for...</h2>
        <p>You can go about your business. <Link to="/">Move along.</Link></p>
      </div>
    )
  }
}

export default PageNotFound

