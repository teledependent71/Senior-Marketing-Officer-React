import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Marketing Officer</title>
        <meta property="og:title" content="Senior Marketing Officer" />
      </Helmet>
    </div>
  )
}

export default Home
