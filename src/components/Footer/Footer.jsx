import React from 'react'
import { Foot, CopyRight, GitHub } from './Footer.style'
import * as config from '../../config'

const Footer = props => {
  return (
    <Foot>
      <CopyRight> Created By GR In learnig Perpises &copy; 2019 </CopyRight>
      <GitHub><a href={config.GIT_HUB}>GitHub</a></GitHub>
    </Foot>
  )
}

export default Footer
