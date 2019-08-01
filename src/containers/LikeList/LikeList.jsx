import React from 'react'
import * as actionsCreater from '../../store/data/ActionCreaters'
import { connect } from 'react-redux'
import LikeListItem from '../../components/LikeListItem/LikeListItem'
import Btn from '../../components/UI/Button/Button'
import NotItems from '../../components/NotItems/NotItems'
import { Main, Container, BtnContainer } from './LikeList.style'

class LikeList extends React.Component {
  renderItemList () {
    return this.props.LikeList.map(el => {
      const id = el.Id
      return (
        <LikeListItem
          Title={el.Title}
          Poster={el.Poster}
          key={id}
          Id={id}
          click={() => this.props.removeItem({ Id: id })} />
      )
    })
  }

  render () {
    return (
      <Main>
        <Container>
          {(this.props.LikeList.length >= 1) ? this.renderItemList() : <NotItems /> }
        </Container>
        <BtnContainer>
          <Btn
            click={() => this.props.history.push('/')}
            title={'Go Back'}
            type={'button'} />
        </BtnContainer>
      </Main>
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
    removeItem: id => dispatch(actionsCreater.removeItemFromLikeListStart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeList)
