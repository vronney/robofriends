/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from "react"
import Card from "./Card"

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("NOOOOO!")
  }
  return (
    <div>
     { 
      robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robot.id}
            name={robot.name}
            email={robot.email} />
        );
      })
     }
    </div>
  );
}

export default CardList