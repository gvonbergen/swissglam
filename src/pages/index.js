import React from "react"
import Insta from "../components/Insta"
import Events from "../components/Events"
import HomeHero from "../components/HomeHero"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <div style={{ width: '1924px', margin: '0 auto' }}>
    <Layout>
      <HomeHero />
      <Events />
      <Insta />
    </Layout>
    </div>
  )
}
