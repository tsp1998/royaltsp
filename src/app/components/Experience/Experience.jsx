import React from 'react'

//components
import Div from '../library/Div/Div'

//styles
import styled from 'styled-components'
const ExperienceStyled = styled(Div)`
  
`

const Experience = ({ className, style, ...rest }) => {
  return (
    <ExperienceStyled
      className={`experience ${className}`}
      style={style}
      {...rest}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur quaerat eaque sed perspiciatis magnam autem ipsam? Impedit sequi quia rem aspernatur, corrupti autem asperiores inventore exercitationem porro fugit dignissimos!
    </ExperienceStyled>
  )
}

export default Experience