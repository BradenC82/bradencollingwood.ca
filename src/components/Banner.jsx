import React from "react"
import { Link } from "gatsby"
import GithubIcon from "../assets/icons/github.svg"
import LinkedInIcon from "../assets/icons/linkedin.svg"

export default function Banner() {
  return (
    <div className="md:my-10 md:mx-8 bg-teal-500">
      <div className="p-8">
        <p className="text-white">I would love to work with you!</p>
        <h3
          className="my-4 text-2xl md:text-4xl  text-white"
          style={{ marginBottom: "0.5rem" }}
        >
          I am currently looking for a 4 month internship as a Full Stack or
          Front-End developer from June to Decemeber
        </h3>
        <div className="flex items-end justify-between">
          <p className="text-white">
            Please feel free to reach out, I would love to learn more about the
            roles and opportunities for students in your organization.
          </p>
          <div className="flex">
            <Link
              to="https://github.com/BradenC82"
              target="_blank"
              className="w-8 h-8 mx-2 text-white"
            >
              <GithubIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/braden-collingwood/"
              target="_blank"
              className="w-8 h-8 mx-2  text-white"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
