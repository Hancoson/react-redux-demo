import React from 'react'
import Items from '../../app/compontens/itemsList'
import { render } from 'enzyme'

const setup = () => {
  const props = {
    items: {
      stories: [
        {
          images: 'images-1',
          title: 'title-1',
          date: '2018-05-29 10:00:00'
        },
        {
          images: 'images-2',
          title: 'title-2',
          date: '2018-05-29 10:00:00'
        },
        {
          images: 'images-3',
          title: 'title-3',
          date: '2018-05-29 10:00:00'
        },
      ],
    },
    emptyData: jest.fn()
  }
  const wrapper = render(<Items {...props} />)
  return {
    props,
    wrapper
  }
}

describe('itemList', () => {
  const { props, wrapper } = setup()
  it('itemList length should be 3', () => {
    expect(wrapper.find('a').length).toBe(3)
  })
})
