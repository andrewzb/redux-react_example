import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, PrimaryTitle, PosterContainer, MoviePoster } from './MovieItem.style'

const MovieItem = ({ Title, Year, imdbID, Type, Poster, history }) => {
  return (
    <Container onClick={() => { history.push(`/${imdbID}`) }}>
      <PrimaryTitle>
        {Title}
      </PrimaryTitle>
      <PosterContainer>
        <MoviePoster img={Poster === 'N/A' ? process.env.REACT_APP_DEF_POSTER : Poster} />
      </PosterContainer>
    </Container>
  )
}

export default withRouter(MovieItem)
