import React from "react"

const baseStyles =
  "cursor-pointer max-w-content inline-block border rounded border-black py-2 px-4 my-4 hover:border-teal-500 hover:text-teal-500"

export default function Button(props) {
  return (
    <>
      {props.href ? (
        <a
          href={props.href}
          target="_blank"
          className={`${baseStyles} ${props.className}`}
        >
          {props.children}
        </a>
      ) : (
        <button className={`${baseStyles} ${props.className}`}>
          {props.children}
        </button>
      )}
    </>
  )
}
