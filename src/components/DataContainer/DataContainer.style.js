import styled from 'styled-components'
import theme from '../../theme'

export const Data = styled.div`
  text-align: left;
  color:  ${theme.Colors.Typography.Light1};
  @media screen and (max-width: ${theme.BreakePoints.t}) {
    text-align: center;
  }
`
