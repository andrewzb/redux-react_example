import styled from 'styled-components'
import theme from '../../theme'

export const Foot = styled.footer`
  width: 100%;
  height: 3rem;
  background-color: ${theme.Colors.Primary.PrimaryDark};
  padding: 0.5rem;
`
export const CopyRight = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  color: ${theme.Colors.Typography.Light1};
`
export const GitHub = styled.div`
  text-align: center;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: ${theme.Colors.Typography.Light1};
  }
`
