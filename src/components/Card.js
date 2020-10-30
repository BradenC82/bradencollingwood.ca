import React from "react"
import Button from "./Button"

export default function Card(props) {
  return (
    <div className="border rounded border-gray-400 p-8">
      <img className="border" src={props.img}></img>
      <div className="flex justify-between items-center">
        <h2>{props.title}</h2> <span>February 2020</span>
      </div>

      <i>React.js, Node, Gatsby</i>
      <p className="pt-2">{props.body}</p>
      <Button className="my-4">View the project</Button>
    </div>
  )
}
