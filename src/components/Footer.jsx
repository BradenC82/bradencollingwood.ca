import React from "react"
import "./footer.module.css"

export default function footer() {
  return (
    <div className="p-6 bg-gray-300">
      <div className="sm:p-8 flex flex-wrap  items-center justify-between">
        <div className="flex flex-wrap flex-col sm:flex-row">
          <div className="mt-4 mr-12">
            <b>Directory</b>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="mt-4 mr-12">
            <b>Development</b>
            <ul>
              <li>Github</li>
              <li>Leetcode</li>
              <li>Hackerank</li>
            </ul>
          </div>
          <div className="mt-4 mr-12">
            <b>Social</b>
            <ul>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Instagram</li>
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
