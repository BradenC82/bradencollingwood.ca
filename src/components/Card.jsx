import React from "react"
import Button from "./Button"

export default function Card(props) {
  return (
    <div className=" flex flex-col justify-between border rounded border-gray-400 p-8">
      <div>
        <img alt="Screenshot" className="border" src={props.img}></img>
        <div className="flex justify-between items-center">
          <h2>{props.title}</h2> <span>February 2020</span>
        </div>

        <i>{props.tech}</i>
        <p className="pt-2 ">{props.body}</p>
      </div>

      <Button href={props.link} className="my-4">
        View the project
      </Button>
    </div>
  )
}
