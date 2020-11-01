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
      <div className="my-10 md:pl-6">
        <div className="py-10 md:py-32">
          <h1 className="text-6xl">Hello, I'm Braden</h1>
          <p>
            I'm a third year Software Engineering Student <br />
            learning cool things at uOttawa.
          </p>
          <a href="/aboutMe" className="inline-block my-4 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
            A little more about me
          </a>
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

      <Card img={Melophile} link={'https://melophile-d7325.web.app/'} tech={'React, Express, Firebase Cloud Functions'}title={'Melophile'} body={'Melophile sorts, filters, and visualizes the qualities of your favorite songs using data from the Spotify API audio analysis end point. It features firebase cloud functions to complete a JSON webtoken auth flow with the Spotify API'}></Card>
      <Card img={Venice} link={'https://bradenc82.github.io/venezia/'} tech={'React, Tailwind CSS'} title={'Venezia'} body={'Venezia is a responsive mock tourism website built to experiment with mobile responsive css properties like flex and grid. The site features an atypical slideshow like navigation that draws attention to images and provides a unique experience to visitors.'}></Card>
      <Card img={Kitchon} link={'https://kitcheon.github.io/home/'} tech={'HTML, CSS, ES6, JQuery'} title={'Kitchon'} body={"A marketing website built for the University of Ottawa's Startup Pitch competition. Kitcheon is a smart recipe application integrating computer vision and machine learning to simplify the way users cook. "}></Card>
      <Card img={Digital} link={'https://bradenc82.github.io/Collingwood-Digital-Portfolio/'} tech={'HTML, CSS, ES6'} title={'Collingwood Digital'} body={'A portfolio website built to showcase work and onboard clients for freelance web development. Developed using the Skeleton CSS framework, Google Maps Api, and Formspree.'}></Card>
      

      

      <div className="rounded p-8 flex items-center border border-gray-400">
        <h1 className="text-4xl text-center text-gray-400">Coming Soon ...</h1>
      </div>

      
    </div>

      
    
  </Layout>
)

export default IndexPage
