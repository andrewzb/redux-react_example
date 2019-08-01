import React from 'react'
import IconUserBar from './IconUserBar/IconUserBar'
import { withRouter } from 'react-router-dom'
import { Container } from './UserBar.style'

const UserBar = props => {
  const { bascketIsEmpty } = props

  // --=TYPES=--
  // **signup
  // **login
  // **logout
  // **heartfill
  // **heart

  const getBasket = boll => (boll === 'true' ? <IconUserBar type="heart" /> : <IconUserBar type="heartfill" />)
  return (
    <Container onClick={() => props.history.push('/likelist')} >
      {getBasket(bascketIsEmpty)}
    </Container>
  )
}

export default withRouter(UserBar)
