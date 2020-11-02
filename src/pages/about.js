import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../assets/profile.png"

const about = () => (
  <Layout>
    <SEO title="About Me" />
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
      }}
      className=""
    >
      <div className="my-20 md:my-32 lg:my-40 md:pl-6 md:mr-12">
        <h1 className="text-5xl">A little about me ...</h1>
        <p className="pt-4">
          I'm currently a 3rd year Software Engineering Student studying at the
          University of Ottawa. My favourite feeling in the world is seeing the
          projects and software I work on solve problems and bring real value to
          the people that use them. In my free time I love jumping into new
          technologies, playing music, and making cool stuff on the web!
        </p>

        <Link
          to="https://drive.google.com/file/d/1NnX6FWLHvvDECIDlm_eLLqn5VSAmHSSC/view"
          target="_blank"
          className="flex max-w-content items-center my-4 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
        >
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
        </Link>

        <h2 className="text-xl pt-4">Technologies I love to use:</h2>

        <div className="flex mt-2">
          <div>
            <b>Front End</b>
            <ul className="mr-6">
              <li>React</li>
              <li>Redux/MobX</li>
              <li>Jest</li>
              <li>JS ES6</li>
              <li>Typescript</li>
            </ul>
          </div>

          <div>
            <b>Back End</b>
            <ul className="mr-10">
              <li>Node</li>
              <li>Express</li>
              <li>AWS</li>
              <li>Docker</li>
            </ul>
          </div>

          <div>
            <b>Databases</b>
            <ul className="mr-6">
              <li>MongoDB</li>
              <li>SQl Server</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>

      <img className="mt-0 md:mt-8" alt="Profile" src={Profile}></img>
    </div>
  </Layout>
)

export default about
