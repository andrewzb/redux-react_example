import React from 'react'
import { ButtonAncerTag, LinkAncerTag, LikeAncerTag } from './Button.style'

// **like
// **link
// **button

const Button = props => {
  const type = props.type || 'button'
  const link = props.link || '#'
  const action = props.click || null
  const title = props.title || 'clicked me'
  const isActive = props.isActive || 'active'

  const getButton = () => {
    switch (type) {
      case 'button': return (<ButtonAncerTag disable={(isActive === 'active') ? false : true} onClick={action} link={link}>{title}</ButtonAncerTag>)
      case 'link': return (<LinkAncerTag disable={(isActive === 'active') ? false : true} onClick={action} link={link}>{title}</LinkAncerTag>)
      case 'like': return (<LikeAncerTag disable={(isActive === 'active') ? false : true} onClick={action} link={link}>{title}</LikeAncerTag>)
      default: return null
    }
  }

  return (
    <React.Fragment>
      {getButton()}
    </React.Fragment>
  )
}

export default Button
