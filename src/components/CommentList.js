import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderComments = () => {
    const { comments } = this.props

    return comments.map(comment => <li key={comment}>{comment}</li>)
  }

  render() {
    return (
      <div>
        <h4>Your Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)
