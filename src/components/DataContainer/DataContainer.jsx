import React from 'react'
import { Data } from './DataContainer.style'

const DataContainer = props => (
  <React.Fragment>
    <Data>Rated As : {props.data.MovieData.Rated}</Data>
    <Data>Runtime : {props.data.MovieData.Runtime}</Data>
    <Data>Year Of Realise : {props.data.MovieData.Released}</Data>
    <Data>Genre : {props.data.MovieData.Genre}</Data>
    <Data>Language : {props.data.MovieData.Language}</Data>
    <Data>Country : {props.data.MovieData.Country}</Data>
    <Data>Director : {props.data.MovieData.Director}</Data>
    <Data>Main Cast : {props.data.MovieData.Actors}</Data>
    <Data>Production : {props.data.MovieData.Production}</Data>
    <Data>BoxOffice : {props.data.MovieData.BoxOffice}</Data>
    <Data>Awards : {props.data.MovieData.Awards}</Data>
  </React.Fragment>
)

export default DataContainer
