import React from 'react'
import { connect } from 'react-redux'
import * as actionsCreater from '../../store/data/ActionCreaters'
import { Container, MovieContainer, ButtonsContainer, ButtonContainer } from './ListMoviePrev.style'
import MovieItem from '../../components/MovieItem/MovieItem'
import Spinner from '../../components/Spinner/Spinner'
import Btn from '../../components/UI/Button/Button'

class ListMoviePrev extends React.Component {
  NextHandler (e) {
    const data = {
      title: this.props.Title,
      page: this.props.CurrentPage,
    }
    this.props.getMoviesNextStart(data)
  }

  PrevHandler (e) {
    const data = {
      title: this.props.Title,
      page: this.props.CurrentPage,
    }
    this.props.getMoviesPrevStart(data)
  }

  componentDidMount () {
    this.props.getMoviesStart({ Title: this.props.Title, CurrentPage: this.props.CurrentPage })
  }

  getMoviesOnPage () {
    return this.props.MoviesOnPage.map(el => (
      <MovieItem
        Title={el.Title}
        Year={el.Year}
        imdbID={el.imdbID}
        Type={el.Type}
        Poster={el.Poster}
        key={el.imdbID} />
    ))
  }
  getMoviesJSX () {
    const maxPages = Math.floor(this.props.ResCounter / 9) + 1
    const page = this.props.CurrentPage
    return (
      <React.Fragment>
        <MovieContainer>{this.getMoviesOnPage()}</MovieContainer>
        <ButtonsContainer>
          <ButtonContainer>
            <Btn
              click={e => this.PrevHandler(e)}
              type={'button'}
              title={'prev'}
              isActive={page <= 1 ? 'disable' : 'active'} />
          </ButtonContainer>
          <ButtonContainer>
            <Btn isActive={'disable'} title={this.props.CurrentPage} />
          </ButtonContainer>
          <ButtonContainer>
            <Btn
              isActive={page <= maxPages ? 'active' : 'disable'}
              click={e => this.NextHandler(e)}
              title={'next'} />
          </ButtonContainer>
        </ButtonsContainer>
      </React.Fragment>
    )
  }

  render () {
    return <Container>{this.props.Spinner ? <Spinner /> : this.getMoviesJSX()}</Container>
  }
}

const mapStateToProps = state => {
  return {
    Title: state.data.Title,
    CurrentPage: state.data.CurrentPage,
    MoviesOnPage: state.data.MoviesOnPage,
    ResCounter: state.data.ResCounter,
    Spinner: state.data.Spinner,
    Err: state.data.Err,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesStart: data => dispatch(actionsCreater.getMovieForCurrentPageStart(data)),
    getMoviesNextStart: data =>
      dispatch(actionsCreater.getMoviesFromSearchbarTitleNextPageStart(data)),
    getMoviesPrevStart: data =>
      dispatch(actionsCreater.getMoviesFromSearchbarTitlePrevPageStart(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMoviePrev)
