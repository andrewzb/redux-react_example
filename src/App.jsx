import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './containers/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import MoviePage from './containers/MoviePage/MoviePage'
import ListMoviePrev from './containers/ListMoviePrev/ListMoviePrev'
import LikeList from './containers/LikeList/LikeList'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={ListMoviePrev} />
          <Route path="/LikeList" exact component={LikeList} />
          <Route path="/:id" component={MoviePage} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
