import styled from 'styled-components'
import theme from '../../theme'

export const MovieContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: ${theme.breakepoints.d}) {
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: ${theme.breakepoints.m}) {
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  }
`
export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (max-width: ${theme.breakepoints.l}) {
    width: 70%;
  }
  @media screen and (max-width: ${theme.breakepoints.d}) {
    width: 80%;
  }
  @media screen and (max-width: ${theme.breakepoints.t}) {
    width: 100%;
  }
`
export const ButtonsContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  border-radius: 1rem 1rem 15rem 15rem;
  background-color: ${theme.colors.primary.primary};
  box-shadow: ${theme.shadow.dark};
  @media screen and (max-width: ${theme.breakepoints.t}) {
    border-radius: 1rem 1rem 10rem 10rem;
  }
  @media screen and (max-width: ${theme.breakepoints.m}) {
    border-radius: 0;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
