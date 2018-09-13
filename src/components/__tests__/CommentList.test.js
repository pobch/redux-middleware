import React from 'react'
import { mount } from 'enzyme'
import Root from '../../Root'
import CommentList from '../CommentList'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {
  // .render() returns a CheerioWrapper
  // a CheerioWrapper can call .text() to display all text in all html tag

  // console.log(wrapped.render().text())
  expect(wrapped.render().text()).toContain('comment 1')
  expect(wrapped.render().text()).toContain('comment 2')
})
