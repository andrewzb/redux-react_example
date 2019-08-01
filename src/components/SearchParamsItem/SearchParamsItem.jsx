import Input from '../UI/Input/Input'
import React from 'react'
import classes from './SearchParamsItem.module.css'
import Container from './SearchParamsItem'

const SearchParamsItem = ({ placeholder }) => {
  return (
    <Container>
      <Input placeholder={placeholder} />
    </Container>
  )
}

export default SearchParamsItem
