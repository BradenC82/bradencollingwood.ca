import React from "react"

import "./Drawer.module.css"

export default function Drawer(props) {
  let DrawerClasses =
    "transition duration-500 ease-out h-full p-8 md:p-12 bg-white shadow-lg text-center fixed top-0 right-0 z-10 w-auto transform translate-x-full"

  if (props.open) {
    DrawerClasses += "translate-x-0"
  }

  return (
    <div className={DrawerClasses}>
      <div
        class=" lg:hidden mr-8 text-right ml-auto mb-2 cursor-pointer"
        onClick={props.toggle}
      >
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-teal-500 hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul
        id="drawerList"
        className="list-none text-right font-display ml-4 md:ml-8"
      >
        <li className="whitespace-no-wrap text-2xl md:text-4xl py-2">
          <a href="#Explore">Home</a>
        </li>
        <li className="whitespace-no-wrap text-2xl md:text-4xl py-2">
          <a href="#Communities">About</a>
        </li>
        <li className="whitespace-no-wrap text-2xl md:text-4xl py-2">
          <a href="#History">My Work</a>
        </li>
        <li className="whitespace-no-wrap text-2xl md:text-4xl py-2">
          <a href="#Attractions">Content</a>
        </li>
      </ul>
    </div>
  )
}
