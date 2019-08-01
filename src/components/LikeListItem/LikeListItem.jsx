import React from 'react'
import Icon from '../UserBar/IconUserBar/IconUserBar'
import { withRouter } from 'react-router-dom'
import { ItemContainer, PosterPrev, PosterImg, PrimaryTitle, Trash } from './LikeListItem.style'

const LikeListItem = props => {
  const { click, Title, Poster, Id, history } = props
  return (
    <ItemContainer>
      <PosterPrev onClick={() => history.push(`/${Id}`)} >
        <PosterImg img={Poster} />
      </PosterPrev>
      <PrimaryTitle>
        {Title}
      </PrimaryTitle>
      <Trash onClick={click}>
        <Icon type={'trash'} />
      </Trash>
    </ItemContainer>
  )
}

export default withRouter(LikeListItem)
