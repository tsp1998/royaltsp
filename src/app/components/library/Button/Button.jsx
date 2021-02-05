import styled from 'styled-components'

import { setMargins, setMarginsLg, setMarginsMd, setMarginsXs } from '../utils/margins'
import { setPaddings, setPaddingsLg, setPaddingsMd, setPaddingsXs } from '../utils/padddings'

const Button = styled.button`
  background-color: #fff;
  color: #333;
  
  ${props => setMargins(props)}
  ${props => setMarginsXs(props)}
  ${props => setMarginsMd(props)}
  ${props => setMarginsLg(props)}

  ${props => setPaddings(props)}
  ${props => setPaddingsXs(props)}
  ${props => setPaddingsMd(props)}
  ${props => setPaddingsLg(props)}
`

export default Button