'use client'
import { Hero, Cards } from "@/devlink"

export default function Home() {
  return (
    <>
    <Hero 
      heading="Built with Devlink"
      paragraph="some new text here"
      buttonText="Get Started"
      buttonAction={{onClick: function() {alert("meowww")}}}//alert("Hello World")
      heroBottom={ <Cards />}
    />
    </>
  )
}
