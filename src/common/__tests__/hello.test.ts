import { sayHello } from '../hello'

describe('sayHello', () => {
  it('says hello', async () => {
    expect(sayHello('test')).toEqual({ body: 'hello, test' })
  })
})
