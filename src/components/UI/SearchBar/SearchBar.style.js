import styled from 'styled-components'
import theme from '../../../theme'

export const Searchbar = styled.div`
padding: 1.5rem;
height: 100%;
width: 60%;
display: flex;
@media screen and (max-width: ${theme.BreakePoints.t}) {
    flex: 1;
  }
`
export const MagnifierBtn = styled.div`
  width: 4rem;
  height: 2rem;
  background-color: ${theme.Colors.Typography.Light1};  
  border-radius: 0 0 30px 0;
  cursor: pointer;
  & > svg {
    padding: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 30px 0 0 0;
  outline: none;
  border: none;
  text-align: center; 
  background-color: ${theme.Colors.Typography.Light1};  
`
