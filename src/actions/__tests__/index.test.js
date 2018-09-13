import { submitComment } from '../index'
import { SAVE_COMMENT } from '../types'

describe('submitComment', () => {
  it('has the corrent type', () => {
    const action = submitComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const action = submitComment('New Comment')

    expect(action.payload).toEqual('New Comment')
  })
})
