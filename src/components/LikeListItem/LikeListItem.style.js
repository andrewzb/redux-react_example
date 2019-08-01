import styled from 'styled-components'
import theme from '../../theme'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color:  ${theme.colors.primary.primaryLight};
  box-shadow:  ${theme.shadow.dark};
  border-radius: 3px;
  border: 1px solid  ${theme.colors.primary.primaryDark}; 
  padding: 0.5rem 1rem;
  margin: 1rem 0.5rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: ${theme.breakepoints.t}) {
    margin: 0.5rem 0;
    padding: 0.3rem 0.2rem
  }
`

export const PosterPrev = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid  ${theme.colors.primary.primaryDark};
`

export const PosterImg = styled.img.attrs(
  props => ({ 'src': props.img, 'alt': 'Poster' })
)`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px solid var(--color-grey-dark-5);
  transition: all 0.2s;
  :hover {
    transform: scale(1.4);
    filter: blur(2px);
  }
`

export const PrimaryTitle = styled.div`
  font-size: 1.2rem;
  color: ${theme.colors.typography.light1};
  @media screen and (max-width: ${theme.breakepoints.d}) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: ${theme.breakepoints.t}) {
    font-size: 0.7rem;
  }
`

export const Trash = styled.div`
  cursor: pointer;
  div {
    height: 3rem;
    width: 3rem;
    margin: 0;
    padding: 0.5rem;
    svg {
      height: 3rem;
      width: 3rem;
    }
  }
`
