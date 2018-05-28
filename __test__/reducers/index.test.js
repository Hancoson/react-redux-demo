import * as actions from '../../app/actions/index'
import types from '../../app/constants/actionType'

console.log(types)
describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.GETSUCCESS,
      text
    }
    expect(actions.fetchPosts(text)).toEqual(expectedAction)
  })
})