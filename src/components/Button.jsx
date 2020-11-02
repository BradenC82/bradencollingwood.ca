import React from "react"
import { Link } from "gatsby"

const baseStyles =
  "cursor-pointer max-w-content inline-block border rounded border-black py-2 px-4 my-4 hover:border-teal-500 hover:text-teal-500"

export default function Button(props) {
  return (
    <>
      {props.href ? (
        <Link
          to={props.href}
          target="_blank"
          className={`${baseStyles} ${props.className}`}
        >
          {props.children}
        </Link>
      ) : (
        <button className={`${baseStyles} ${props.className}`}>
          {props.children}
        </button>
      )}
    </>
  )
}
