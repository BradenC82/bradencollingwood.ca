import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import "./header.module.css"
import Dropdown from "./dropdown"
import Drawer from "./Drawer"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  // True for view ports <= 768px
  const [matches, setMatches] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 1024px)").matches
      : false
  )

  // Keeping the handler defined inside useEffect prevents the method being recreated on every render
  useEffect(
    () => {
      const handler = event => {
        setMatches(event.matches)
      }
      typeof window !== "undefined" &&
        window.matchMedia("(max-width: 1024px)").addListener(handler)
    },
    [] /* componentDidMount*/
  )

  return (
    <nav class="flex items-center justify-between flex-wrap ">
      <a
        href="/"
        style={{ height: "5rem", width: "5rem" }}
        class="bg-teal-500  p-6 flex items-center justify-center flex-shrink-0 text-white mr-6 cursor-pointer"
      >
        <h1 class="text-white text-xl tracking-tight">BC</h1>
      </a>

      <div class="block lg:hidden mr-8" onClick={() => setOpen(prev => !prev)}>
        <button class="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-500 hover:text-teal-500 hover:border-teal-500">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {open ? (
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>
      <div
        class={` transition-all duration-300 ease-linear w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        style={{
          maxHeight: open || !matches ? "300px" : "0px",
          overflow: "hidden",
        }}
      >
        {matches ? (
          <Dropdown open={open}></Dropdown>
        ) : (
          <>
            <div class="text-sm flex-grow">
              <ul
                class="flex justify-end mr-8 flex-grow "
                style={{ fontSize: "1rem" }}
              >
                <li>
                  <Link
                    href="/"
                    className="inline-block mt-0 text-black hover:text-teal-500 mr-8"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className=" lg:inline-block mt-0 text-black hover:text-teal-500 mr-8"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#myWork"
                    className=" inline-block mt-0 text-black hover:text-teal-500"
                  >
                    My Work
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="/contact"
                class=" mr-8 inline-block  px-5 py-3 leading-none border rounded text-black border-black hover:border-teal-500 hover:text-teal-500  mt-4 lg:mt-0"
                style={{ fontSize: "1rem" }}
              >
                Contact
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
