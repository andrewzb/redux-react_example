import React from 'react'
import { connect } from 'react-redux'
import * as actionsCreater from '../../store/data/ActionCreaters'
import { Head, Container } from './Header.style'
import { ReactComponent as Logo } from '../../assets/loggo.svg'
import UserBar from '../../components/UserBar/UserBar'
import SearchBar from '../../components/UI/SearchBar/SearchBar'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
    }
  };

  handleChange (event) {
    this.setState({ title: event.target.value })
  }

  handelSearch () {
    this.props.getMoviesByTitle({ title: this.state.title })
  }

  render () {
    return (
      <Head>
        <Container>
          <Logo />
          <SearchBar title={this.state.title} onTupe={e => this.handleChange(e)} onSearch={() => this.handelSearch()} />
          <UserBar bascketIsEmpty={(this.props.LikeList.length >= 1) ? 'false' : 'true'} />
        </Container>
      </Head>
    )
  }
}

const mapStateToProps = state => {
  return {
    LikeList: state.data.LikeList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesByTitle: data => { dispatch(actionsCreater.getMoviesFromSearchbarTitleStart(data)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
