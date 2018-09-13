import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default ChildComponent => {
  class ComposedComponent extends Component {
    static propTypes = {
      auth: PropTypes.bool.isRequired,
      history: PropTypes.shape({
        push: PropTypes.func
      }).isRequired
    }

    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway = () => {
      const { auth, history } = this.props
      if (!auth) {
        history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth
  })

  return connect(mapStateToProps)(ComposedComponent)
}
