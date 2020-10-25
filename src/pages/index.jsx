import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

import Image from "../assets/image.png";
import Kitchon from "../assets/kitchon.png";
import Venice from "../assets/venice.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
        cursor: "pointer",
      }}
      className=""
    >
      <div className="my-10 md:px-8">
        <div className="py-10 md:py-32">
          <h1 className="text-6xl">Hello, I'm Braden</h1>
          <p>
            I'm a third year Software Engineering Student <br />
            learning cool things at uOttawa.
          </p>
          <button className="my-4 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
            A little more about me
          </button>
        </div>
      </div>
      <Hero></Hero>
    </div>
    <h4 className="md:px-8 text-4xl">Here's a few of my projects</h4>
    <div
    className="py-10 md:p-8"
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
        gridGap: "1.2rem",
        cursor: "pointer",
      }}
    >
      <div className="border rounded border-gray-400 p-8">
        <img src={Image}></img>
        <h2>Melophile</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem quo at quasi dolore. Culpa necessitatibus placeat incidunt aliquid, ratione voluptates rerum fugit nobis vero fuga dolores ex dolorem veritatis.</p>
        <button className="border rounded border-black py-2 px-4 my-4">View the project</button>
      </div>
      <div className="border rounded border-gray-400 p-8">
        <img src={Venice}></img>
        <h2>Venezia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem quo at quasi dolore. Culpa necessitatibus placeat incidunt aliquid, ratione voluptates rerum fugit nobis vero fuga dolores ex dolorem veritatis.</p>
        <button className="border rounded border-black py-2 px-4 my-4">View the project</button>
      </div>
      <div className="border rounded border-gray-400 p-8">
        <img src={Kitchon}></img>
        <h2>Kitchon</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem quo at quasi dolore. Culpa necessitatibus placeat incidunt aliquid, ratione voluptates rerum fugit nobis vero fuga dolores ex dolorem veritatis.</p>
        <button className="border rounded border-black py-2 px-4 my-4">View the project</button>
      </div>
      <div className="border rounded border-gray-400 p-8">
        <img src={Image}></img>
        <h2>Collingwood Digital</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem quo at quasi dolore. Culpa necessitatibus placeat incidunt aliquid, ratione voluptates rerum fugit nobis vero fuga dolores ex dolorem veritatis.</p>
        <button className="border rounded border-black py-2 px-4 my-4">View the project</button>
      </div>

      

      <div className="rounded p-8 flex items-center border border-gray-400">
        <h1 className="text-4xl text-center text-gray-400">Coming Soon ...</h1>
      </div>

      
    </div>

    <div className=" my-10 md:mx-8 bg-teal-500">
      <div className="p-8">
      <p className="text-white" >I would love to work with you!</p>
      <h3 className="my-4 text-4xl  text-white" style={{marginBottom:'0.5rem'}}>I am currently looking for a 4 month internship as a frontend developer from June to Decemeber</h3>
      <div className="flex items-end justify-between">
      <p className="text-white ">Please feel free to reach out, I would love to learn more about the roles and opportunities for students in your organization.</p>
        <div className="flex">
        <div className="w-8 h-8 mx-2 bg-teal-800"></div>
        <div className="w-8 h-8 mx-2 bg-teal-800"></div>
        <div className="w-8 h-8 mx-2 bg-teal-800"></div>
        </div>
      
      </div>
      
      
      </div>
      
    </div>
  </Layout>
)

export default IndexPage
