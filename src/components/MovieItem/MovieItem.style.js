import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
padding: 1rem;
background-color: ${theme.Colors.Primary.Primary};
color: ${theme.Colors.Typography.Light1};
box-shadow: ${theme.Shadow.Dark};
border-radius: 6px;
cursor: pointer;
transition: all 0.3s;
&:hover {
  background-color: ${theme.Colors.Primary.PrimaryDark};
}
`
export const PrimaryTitle = styled.div`
  display: block;
  font-size: 0.8rem;
  color: ${theme.Shadow.Dark};
  text-align: center;
  @media screen and (max-width: ${theme.BreakePoints.d}) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: ${theme.BreakePoints.m}) {
    font-size: 0.9rem;
  }
`
export const PosterContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0.5rem;
  }
`
export const MoviePoster = styled.img.attrs(
  props => ({ 'src': props.img, 'alt': 'Poster' })
)`
  width: 100%;
  height: auto;
`
