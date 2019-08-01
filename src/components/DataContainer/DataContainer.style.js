import styled from 'styled-components'
import theme from '../../theme'

export const Data = styled.div`
  text-align: left;
  color:  ${theme.colors.typography.light1};
  @media screen and (max-width: ${theme.breakepoints.t}) {
    text-align: center;
  }
`
