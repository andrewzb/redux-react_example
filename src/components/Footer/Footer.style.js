import styled from 'styled-components'
import theme from '../../theme'

export const Foot = styled.footer`
  width: 100%;
  height: 3rem;
  background-color: ${theme.colors.primary.primaryDark};
  padding: 0.5rem;
`
export const CopyRight = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  color: ${theme.colors.typography.light1};
`
export const GitHub = styled.div`
  text-align: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${theme.colors.typography.light1};
  }
`
