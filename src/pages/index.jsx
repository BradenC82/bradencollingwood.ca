import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

import Melophile from "../assets/melophile.png";
import Kitchon from "../assets/kitchon.png";
import Venice from "../assets/venice.jpg";
import Digital from "../assets/digital.png";

import Card from "../components/Card";

const bodyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem quo at quasi dolore. Culpa necessitatibus placeat incidunt aliquid, ratione voluptates rerum fugit nobis vero fuga dolores ex dolorem veritatis."

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
      }}
      className=""
    >
      <div className="my-10 md:px-6">
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
    <div className="pb-8" id="myWork"></div>
    <h4 className="md:px-6 text-4xl" >Here's a few of my projects</h4>
    <div
    className="py-10 md:p-6"
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(19rem, 1fr))",
        gridGap: "1.2rem",
      }}
    >

      <Card img={Melophile} title={'Melophile'} body={bodyText}></Card>
      <Card img={Venice} title={'Venezia'} body={bodyText}></Card>
      <Card img={Kitchon} title={'Kitchon'} body={bodyText}></Card>
      <Card img={Digital} title={'Collingwood Digital'} body={bodyText}></Card>
      

      

      <div className="rounded p-8 flex items-center border border-gray-400">
        <h1 className="text-4xl text-center text-gray-400">Coming Soon ...</h1>
      </div>

      
    </div>

      
    
  </Layout>
)

export default IndexPage
