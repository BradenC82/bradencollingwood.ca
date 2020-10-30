import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../assets/profile.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
      }}
      className=""
    >
      <div className="mt-4 lg:mt-40 md:px-6">
        <h1 className="text-5xl">The story so far ...</h1>
        <p className="pt-4">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          voluptatem quo at quasi dolore. Culpa necessitatibus placeat incidunt
          aliquid, ratione voluptates rerum fugit nobis vero fuga dolores ex
          dolorem veritatis."
        </p>

        <button className="flex items-center my-4 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
          Resume
          <svg
            className="ml-2 w-4 h-4 fill-current"
            height="1rem"
            viewBox="0 0 512 512"
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Solid">
              <path d="m239.029 384.97a24 24 0 0 0 33.942 0l90.509-90.509a24 24 0 0 0 0-33.941 24 24 0 0 0 -33.941 0l-49.539 49.539v-262.059a24 24 0 0 0 -48 0v262.059l-49.539-49.539a24 24 0 0 0 -33.941 0 24 24 0 0 0 0 33.941z" />
              <path d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z" />
            </g>
          </svg>
        </button>

        <h2 className="text-xl pt-4">Skills:</h2>

        <div className="flex mt-2">
          <div>
            <b>Category</b>
            <ul className="mr-6">
              <li>React</li>
              <li>Redux</li>
              <li>Jest</li>
              <li>JS ES6</li>
              <li>Typescript</li>
            </ul>
          </div>

          <div>
            <b>Category</b>
            <ul className="mr-6">
              <li>React</li>
              <li>Redux</li>
              <li>Jest</li>
              <li>JS ES6</li>
              <li>Typescript</li>
            </ul>
          </div>

          <div>
            <b>Category</b>
            <ul className="mr-6">
              <li>React</li>
              <li>Redux</li>
              <li>Jest</li>
              <li>JS ES6</li>
              <li>Typescript</li>
            </ul>
          </div>
        </div>
      </div>

      <img className="mt-8 md:mt-0" src={Profile}></img>
    </div>
  </Layout>
)

export default SecondPage
