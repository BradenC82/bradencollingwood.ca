import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

const Dropdown = ({ siteTitle, open }) => {
  return (
    <div
      class={`transition-all  duration-300 ease-linear  w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      style={{
        maxHeight: open ? "300px" : "0px",
        overflow: "hidden",
      }}
    >
      <div class=" shadow text-sm ml-auto flex flex-col  px-6 ">
        <ul class="pb-6 pt-6 border-b">
          <li>
            <Link
              to="/"
              className="block     text-gray-800 hover:text-teal-500 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block mt-4     text-gray-800 hover:text-teal-500 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#myWork"
              className="block mt-4     text-gray-800 hover:text-teal-500"
            >
              My Work
            </Link>
          </li>
          <div>
            <Link
              href="/contact"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 hover:border-teal-500 hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Contact
            </Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
