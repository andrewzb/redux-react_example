import React from 'react'
import { ReactComponent as MovieLogo } from '../../assets/movie.svg'
import { Container, TitlePrimary, TitleSecondary, LogoContainer } from './NotItems.style'

const NotItems = props => {
  return (
    <Container>
      <TitlePrimary>
        Your's Basket is Empty
      </TitlePrimary>
      <TitleSecondary>
        Plese Put Something In It
      </TitleSecondary>
      <LogoContainer>
        <MovieLogo />
      </LogoContainer >
    </Container>
  )
}

export default NotItems
