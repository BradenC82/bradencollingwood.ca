import React from "react"

const baseStyles =
  "cursor-pointer inline-block border rounded border-black py-2 px-4 my-4 hover:border-teal-500 hover:text-teal-500"

export default function Button(props) {
  return (
    <>
      {props.href ? (
        <button className={baseStyles} {...props}>
          {props.children}
        </button>
      ) : (
        <a href={props.href} {...props} className={baseStyles}>
          {props.children}
        </a>
      )}
    </>
  )
}
