import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
padding: 1rem;
background-color: ${theme.colors.primary.primary};
color: ${theme.colors.typography.light1};
box-shadow: ${theme.shadow.dark};
border-radius: 6px;
cursor: pointer;
transition: all 0.3s;
&:hover {
  background-color: ${theme.colors.primary.primaryDark};
}
`
export const PrimaryTitle = styled.div`
  display: block;
  font-size: 0.8rem;
  color: ${theme.shadow.dark};
  text-align: center;
  @media screen and (max-width: ${theme.breakepoints.d}) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: ${theme.breakepoints.m}) {
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
