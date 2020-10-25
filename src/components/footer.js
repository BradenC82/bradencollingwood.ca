import React from "react"

export default function footer() {
  return (
    <div className="p-6 bg-gray-300">
      <div className="p-8 flex items-center justify-between">
        <div className="flex mr-10">
          <div style={{ marginRight: "4rem" }}>
            <b>Directory</b>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div style={{ marginRight: "4rem" }}>
            <b>Development</b>
            <ul>
              <li>Github</li>
              <li>Leetcode</li>
              <li>Hackerank</li>
            </ul>
          </div>
          <div>
            <b>Social</b>
            <ul>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div>
          <b>General Inquries</b>
          <h1 className="text-3xl mr-12  text-gray-700">
            bradencollingwood82@gmail.com
          </h1>
        </div>
      </div>
    </div>
  )
}
