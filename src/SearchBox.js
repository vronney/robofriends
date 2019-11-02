/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from "react"

const SearchBox = ({searchChange}) => {
  return(
    <div className="pa2">
      <input className="bg-lightest-blue" type="search" 
      placeholder="search robots"
      onChange={ searchChange } />
    </div>
  )
}

export default SearchBox