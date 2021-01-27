import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Hero from '../components/HeroContainer'

import bgImage from '../images/hero-background.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero
      srcMedia={bgImage}
      heroTag={'Família Jupi'}
      heroTitle='Produtos de alta qualidade para os consumidores mais exigentes'
    />
  </Layout>
)

export default IndexPage
