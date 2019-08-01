import styled from 'styled-components'
import theme from '../../theme'

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem - 3rem);
`
export const Container = styled.div`
  width: 60%;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: ${theme.colors.primary.primary};
  min-height: calc(100vh - 5rem - 3rem - 7vh);
  @media screen and (max-width: ${theme.breakepoints.l}) {
    width: 80%;
  }
  @media screen and (max-width: ${theme.breakepoints.d}) {
    width: 100%;
  }
  @media screen and (max-width: ${theme.breakepoints.t}) {
    padding: 0.5rem 0;
  }
`
export const BtnContainer = styled.div`
  width: 60%;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background-color: ${theme.colors.primary.primary};
  border-radius: 5px;
  min-height: calc(7vh);
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${theme.breakepoints.l}) {
    width: 80%;
  }
  @media screen and (max-width: ${theme.breakepoints.d}) {
    width: 100%;
  }
  a {
    text-align: center;
  }
`
