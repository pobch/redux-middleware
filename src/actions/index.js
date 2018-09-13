import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS, AUTH_CHANGE } from './types'

export const submitComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment
})

export const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments')

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export const authChange = isLoggedIn => ({
  type: AUTH_CHANGE,
  payload: isLoggedIn
})
