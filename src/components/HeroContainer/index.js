import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Button from '../Button'

import {
  HeroWrapper,
  HeroSource,
  HeroTag,
  HeroTitle,
  HeroProducts
} from './style'

const Hero = ({ srcMedia, heroTag, heroTitle }) => {
  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "hero-products.png" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <HeroWrapper>
      <HeroSource src={srcMedia} />
      <div className='container'>
        <div className='row'>
          <div className='col-11 col-lg-10 pd-0'>
            <HeroTag>{heroTag}</HeroTag>
            <HeroTitle>{heroTitle}</HeroTitle>
          </div>
          <HeroProducts className='col-12'>
            <Img fluid={heroImage.childImageSharp.fluid} alt='Família Jupi' />
          </HeroProducts>
        </div>
        <Button
          slug='/produtos'
          buttonClass='yellowButton'
          buttonTitle='Veja todos os produtos'
        >
          Veja todos os produtos
        </Button>
      </div>
    </HeroWrapper>
  )
}

export default Hero
