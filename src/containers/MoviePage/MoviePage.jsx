import React from 'react'
import { connect } from 'react-redux'
import * as actionsCreater from '../../store/data/ActionCreaters'
import Btn from '../../components/UI/Button/Button'
import DataContainer from '../../components/DataContainer/DataContainer'
import {
  Main,
  Container,
  TitleAndBtnContainer,
  PrimaryTitle,
  PosterAndDataContainer,
  PosterContainer,
  Poster,
  ContainerForData,
  LinkContainer,
  LikeAndGoBackBtnContainer,
} from './MoviePage.style'

class MoviePage extends React.Component {
  componentDidMount () {
    const str = this.props.location.pathname
    const id = str.substr(1)
    this.props.getMovieOnLoadStart({ Id: id })
  }

  toggleLike () {
    const str = this.props.location.pathname
    const id = str.substr(1)
    const data = {
      Id: this.props.MovieData.imdbID,
      Title: this.props.MovieData.Title,
      Poster: this.props.MovieData.Poster,
    }
    this.props.toggleLikeList(data)
  }

  getMovieMarckup () {
    if (this.props.MovieData === null) {
      return <div>Error</div>
    }
    return (
      <Main>
        <Container>
          <TitleAndBtnContainer>
            <PrimaryTitle>{this.props.MovieData.Title}</PrimaryTitle>
          </TitleAndBtnContainer>
          <PosterAndDataContainer>
            <PosterContainer>
              <Poster img={this.props.MovieData.Poster} />
            </PosterContainer>
            <ContainerForData>
              <DataContainer data={this.props} />
              <LinkContainer>
                <Btn type={'link'} title={'Site'} link={this.props.MovieData.Website} />
              </LinkContainer>
            </ContainerForData>
          </PosterAndDataContainer>
          <LikeAndGoBackBtnContainer>
            <Btn type={'like'} click={() => this.toggleLike()} title={'Like'} />
            <Btn type={'button'} title={'GoBack'} click={() => this.props.history.push('/')} />
          </LikeAndGoBackBtnContainer>
        </Container>
      </Main>
    )
  }

  render () {
    return this.getMovieMarckup()
  }
}

const mapStateToProps = state => {
  return {
    MovieData: state.data.MovieData,
    LikeList: state.data.LikeList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieOnLoadStart: data => dispatch(actionsCreater.getMoviesByIdStart(data)),
    toggleLikeList: data => dispatch(actionsCreater.toggleMovieInLocalstorgeStart(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage)
