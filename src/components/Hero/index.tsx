import React from 'react'
import { FormStyled, HeroTitle } from './style'

const Hero = () => (
  <FormStyled as="form" isActive={true}>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </FormStyled>
)
export default Hero
