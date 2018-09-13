import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'
import requireAuth from './requireAuth'

class CommentBox extends Component {
  static propTypes = {
    submitComment: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }

  handleChange = event => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = event => {
    const { submitComment } = this.props
    const { comment } = this.state

    event.preventDefault()
    submitComment(comment)
    this.setState({ comment: '' })
  }

  render() {
    const { fetchComments } = this.props
    const { comment } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={comment} />
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
        <div>
          <button
            type="button"
            className="fetch-comments"
            onClick={fetchComments}
          >
            Fetch Comments
          </button>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox))
