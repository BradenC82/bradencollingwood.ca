import React from "react"
import "./footer.module.css"
import { Link } from "gatsby"

export default function footer() {
  return (
    <div className="p-6 bg-gray-300">
      <div className="sm:p-8 flex flex-wrap  items-center justify-between">
        <div className="flex flex-wrap flex-col sm:flex-row">
          <div className="mt-4 mr-12">
            <b>Directory</b>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/#myWork">My Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="mt-4 mr-12">
            <b>Development</b>
            <ul>
              <li><Link to="https://github.com/BradenC82">Github</Link></li>
              <li><Link to="https://leetcode.com/BradenCollingwood/">Leetcode</Link></li>
              <li><Link to="https://www.hackerrank.com/bradencollingwo1">Hackerank</Link></li>
            </ul>
          </div>
          <div className="mt-4 mr-12">
            <b>Social</b>
            <ul>
              <li><Link to="https://www.linkedin.com/in/braden-collingwood/">Linkedin</Link></li>
              <li><Link to="https://www.facebook.com/braden.collingwood.1/">Facebook</Link></li>
              <li><Link to="https://www.instagram.com/bradencollingwood/">Instagram</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mb-4 sm:mr-12">
          <b>General Inquries</b>
          <h1 className="text-3xl  text-gray-700">
            bradencollingwood82<span className="inline-block">@gmail.com</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
