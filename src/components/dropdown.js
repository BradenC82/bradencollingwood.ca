import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

const Dropdown = ({ siteTitle, open }) => {
  return (
    <div
      class={`transition-all duration-300 ease-linear w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      style={{
        maxHeight: open ? "300px" : "0px",
        overflow: "hidden",
      }}
    >
      <div class="text-sm">
        <ul>
          <li>
            <Link className="block mt-4  text-teal-200 hover:text-white mr-4">
              Home
            </Link>
          </li>
          <li>
            <Link className="block mt-4  text-teal-200 hover:text-white mr-4">
              About
            </Link>
          </li>
          <li>
            <Link className="block mt-4  text-teal-200 hover:text-white">
              My Work
            </Link>
          </li>
        </ul>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
