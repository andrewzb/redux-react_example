import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  div {
    padding: 0.5rem 0;
  }
`
export const TitlePrimary = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: ${theme.Colors.Typography.Dark1};
`
export const TitleSecondary = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: ${theme.Colors.Typography.Dark1};
  text-align: center;
`
export const LogoContainer = styled.div`
  width: 100%;
  svg {
    width: 100%;
    height: 5rem;
  }
`
