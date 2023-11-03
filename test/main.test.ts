import { sayHello } from '../src/main'

describe('sayHello', () => {
  it('should say hello', () => {
    const spy = jest.spyOn(console, 'log')
    sayHello('World')
    expect(spy).toHaveBeenCalledWith('Hello World!')
  })
})
