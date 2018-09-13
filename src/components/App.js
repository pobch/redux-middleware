import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import * as actions from '../actions'

class App extends Component {
  static propTypes = {
    auth: PropTypes.bool.isRequired,
    authChange: PropTypes.func.isRequired
  }

  renderButton = () => {
    const { auth, authChange } = this.props

    if (auth) {
      return (
        <button type="button" onClick={() => authChange(false)}>
          Sign Out
        </button>
      )
    }
    return (
      <button type="button" onClick={() => authChange(true)}>
        Sign In
      </button>
    )
  }

  renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>{this.renderButton()}</li>
    </ul>
  )

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  actions
)(App)
