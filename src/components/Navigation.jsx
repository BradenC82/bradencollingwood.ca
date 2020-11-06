import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <div className="flex items-center">
      <div class="flex-grow text-sm">
        <ul
          class="flex flex-grow justify-end mr-8"
          style={{ fontSize: "1rem" }}
        >
          <li>
            <Link
              to="/"
              className="inline-block mt-0 text-black hover:text-teal-500 mr-8"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className=" lg:inline-block mt-0 text-black hover:text-teal-500 mr-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#myWork"
              className=" inline-block mt-0 text-black hover:text-teal-500"
            >
              My Work
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/contact">
          <a class=" mr-8 inline-block  px-5 py-3 leading-none border rounded text-black border-black hover:border-teal-500 hover:text-teal-500  mt-4 lg:mt-0">
            Contact
          </a>
        </Link>
      </div>
    </div>
  )
}
