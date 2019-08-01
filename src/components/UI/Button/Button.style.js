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
  box-shadow: ${theme.shadow.dark};
  pointer-events : ${props => props.disable ? 'none' : 'auto'}
  cursor: ${props => props.disable ? 'auto' : 'pointer'}
  color: ${props => props.disable ? theme.buttons.button.textDisable : theme.buttons.button.textEnable}
  background-color: ${props => props.disable ? theme.buttons.button.backDisable : theme.buttons.button.backEnable}
  @media screen and (max-width: ${theme.breakepoints.d}) {
      font-size: 0.9rem;
    }
  @media screen and (max-width: ${theme.breakepoints.t}) {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    }
  @media screen and (max-width: ${theme.breakepoints.m}) {
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
box-shadow: ${theme.shadow.dark};
pointer-events : ${props => props.disable ? 'none' : 'auto'}
cursor: ${props => props.disable ? 'auto' : 'pointer'}
color: ${props => props.disable ? theme.buttons.link.textDisable : theme.buttons.link.textEnable}
background-color: ${props => props.disable ? theme.buttons.link.backDisable : theme.buttons.link.backEnable}
@media screen and (max-width: ${theme.breakepoints.d}) {
    font-size: 0.9rem;
  }
@media screen and (max-width: ${theme.breakepoints.t}) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
@media screen and (max-width: ${theme.breakepoints.m}) {
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
box-shadow: ${theme.shadow.dark};
pointer-events : ${props => props.disable ? 'none' : 'auto'}
cursor: ${props => props.disable ? 'auto' : 'pointer'}
color: ${props => props.disable ? theme.buttons.like.textDisable : theme.buttons.like.textEnable}
background: ${props => props.disable ? theme.buttons.like.backDisable : theme.buttons.like.backEnable}
@media screen and (max-width: ${theme.breakepoints.d}) {
    font-size: 0.9rem;
  }
@media screen and (max-width: ${theme.breakepoints.t}) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
@media screen and (max-width: ${theme.breakepoints.m}) {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
`
