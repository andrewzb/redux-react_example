import styled from 'styled-components'
import theme from '../../theme'

export const Head = styled.div`
  height: 5rem;
  width: 100%;
  background-color: ${theme.Colors.Primary.Primary};
`
export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: ${theme.BreakePoints.d}) {
    width: 100%;
    padding: 0 2rem;
  }
  @media screen and (max-width: ${theme.BreakePoints.t}) {
    width: 100%;
    padding: 0;
  }
  > svg {
    height: 5rem;
    width: 5rem;
    padding: 0.5rem;
    @media screen and (max-width: ${theme.BreakePoints.t}) {
      display: none;
    }
  }
`
export const GitHub = styled.div`
  text-align: center;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: ${theme.Colors.Typography.Light1};
  }
`
