/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from "react"

const Scroll = (props) => {
  return (
    <div style={{overflowY: "scroll", border: "1px solid black", height: "77.5vh"}}>
      {props.children}
    </div>
  )
}

export default Scroll