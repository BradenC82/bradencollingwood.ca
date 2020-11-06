import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./header.module.css"
import Dropdown from "./Dropdown"
import Navigation from "./Navigation"

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClickHamburger = () => setOpen(prev => !prev)

  return (
    <nav class="flex items-center justify-between flex-wrap ">
      <Link to="/">
        <a className="w-20 h-20 bg-teal-500  p-6 flex items-center justify-center flex-shrink-0 text-white mr-6 cursor-pointer">
          <h1 class="text-white text-xl tracking-tight">BC</h1>
        </a>
      </Link>

      <div class="block lg:hidden mr-8">
        <button
          onClick={handleClickHamburger}
          class="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-500 hover:text-teal-500 hover:border-teal-500"
        >
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
        className="block lg:hidden transition-all duration-300 ease-linear w-full overflow-hidden"
        style={{
          maxHeight: open ? "300px" : "0px",
        }}
      >
        <Dropdown open={open}></Dropdown>
      </div>

      <div className="hidden lg:block ">
        <Navigation></Navigation>
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
