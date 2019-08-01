import styled from 'styled-components'
import theme from '../../theme'

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${theme.breakepoints.d}) {
    padding: 1rem;
  }
  @media screen and (max-width: ${theme.breakepoints.m}) {
    padding: 0;
  }
`
export const Container = styled.div`
  width: 60%;
  margin: 1.5rem auto;
  padding: 1rem 0;
  background-color: ${theme.colors.primary.primary};
  border-radius: 5px;
  box-shadow: ${theme.shadow.dark};
  @media screen and (max-width: ${theme.breakepoints.l}) {
    width: 80%;
  }
  @media screen and (max-width: ${theme.breakepoints.d}) {
    width: 100%;
  }
`
export const TitleAndBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const PrimaryTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${theme.colors.typography.dark2};
`
export const PosterAndDataContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  @media screen and (max-width: ${theme.breakepoints.d}) {
    padding: 0;
  }
  @media screen and (max-width: ${theme.breakepoints.t}) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
  div {
    margin: 0.8rem;
  }
`
export const PosterContainer = styled.div`
  @media screen and (max-width: ${theme.breakepoints.t}) {
    width: auto;
    text-align: center;
  }
`

export const Poster = styled.img.attrs(props => ({ src: props.img, alt: 'Poster' }))``

export const ContainerForData = styled.div`
  div {
    font-size: 0.8rem;
    margin: 1rem;
    color: ${theme.colors.typography.dark1};
    @media screen and (max-width: ${theme.breakepoints.d}) {
      margin: 0.7rem;
    }
    @media screen and (max-width: ${theme.breakepoints.t}) {
      margin: 0.5rem;
    }
  }
`
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const LikeAndGoBackBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
`
