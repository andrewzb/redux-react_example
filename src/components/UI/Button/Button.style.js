import styled from 'styled-components'
import theme from '../../../theme'

export const ButtonAncerTag = styled.a.attrs(
  props => ({ 'href': props.link })
)`
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-transform: capitalize;
  box-shadow: ${theme.Shadow.Dark};
  pointer-events : ${props => props.disable ? 'none' : 'auto'}
  cursor: ${props => props.disable ? 'auto' : 'pointer'}
  color: ${props => props.disable ? theme.Buttons.Button.TextEnable : theme.Buttons.Button.TextEnable}
  background-color: ${props => props.disable ? theme.Buttons.Button.BackEnable : theme.Buttons.Button.BackEnable}
  @media screen and (max-width: ${theme.BreakePoints.d}) {
      font-size: 0.9rem;
    }
  @media screen and (max-width: ${theme.BreakePoints.t}) {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    }
  @media screen and (max-width: ${theme.BreakePoints.m}) {
      font-size: 0.7rem;
      padding: 0.2rem 0.5rem;
    }
  `

export const LinkAncerTag = styled.a.attrs(
  props => ({ 'href': props.link })
)`
font-size: 1rem;
text-decoration: none;
padding: 0.5rem 1rem;
border-radius: 3px;
box-shadow: ${theme.Shadow.Dark};
pointer-events : ${props => props.disable ? 'none' : 'auto'}
cursor: ${props => props.disable ? 'auto' : 'pointer'}
color: ${props => props.disable ? theme.Buttons.Link.TextEnable : theme.Buttons.Link.TextEnable}
background-color: ${props => props.disable ? theme.Buttons.Link.BackEnable : theme.Buttons.Link.BackEnable}
@media screen and (max-width: ${theme.BreakePoints.d}) {
    font-size: 0.9rem;
  }
@media screen and (max-width: ${theme.BreakePoints.t}) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
@media screen and (max-width: ${theme.BreakePoints.m}) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
`

export const LikeAncerTag = styled.a.attrs(
  props => ({ 'href': props.link })
)`
font-size: 1rem;
outline: none;
border: none;
text-decoration: none;
border-radius: 3px;
padding: 0.5rem 1rem;
text-transform: capitalize;
box-shadow: ${theme.Shadow.Dark};
pointer-events : ${props => props.disable ? 'none' : 'auto'}
cursor: ${props => props.disable ? 'auto' : 'pointer'}
color: ${props => props.disable ? theme.Buttons.Like.TextEnable : theme.Buttons.Like.TextEnable}
background: ${props => props.disable ? theme.Buttons.Like.BackEnable : theme.Buttons.Like.BackEnable}
@media screen and (max-width: ${theme.BreakePoints.d}) {
    font-size: 0.9rem;
  }
@media screen and (max-width: ${theme.BreakePoints.t}) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
@media screen and (max-width: ${theme.BreakePoints.m}) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
`
