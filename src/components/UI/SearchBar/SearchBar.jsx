import React from 'react'
import { ReactComponent as Magnifier } from '../../../assets/magnifier.svg'
import { Searchbar, MagnifierBtn, SearchInput } from './SearchBar.style'

const SearchBar = props => {
  return (
    <Searchbar>
      <SearchInput value={props.title} type="text" placeholder="Search.." onChange={props.onTupe} />
      <MagnifierBtn onClick={props.onSearch}>
        <Magnifier />
      </MagnifierBtn>
    </Searchbar>
  )
}

export default SearchBar
