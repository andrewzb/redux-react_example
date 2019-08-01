import styled from 'styled-components'
import theme from '../../../theme'

export const Container = styled.div`
  width: auto;
  height: 5rem;
  padding: 1rem 0.3rem;
  @media screen and (max-width: ${theme.breakepoints.t}) {
    padding: 1.5rem 0.3rem;
  }
  svg {
    width: 3rem;
    height: 3rem;
    @media screen and (max-width: ${theme.breakepoints.t}) {
      width: 2rem;
      height: 2rem;
    }
  }
`
