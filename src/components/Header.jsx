import React from 'react'
import PropTypes from 'prop-types'

export default function Header({text}) {
  return (
    <header>
        <div className="container header">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:"Kya Company"
}

Header.prototypes = {
    text: PropTypes.string
}
