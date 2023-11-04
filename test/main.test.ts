import { sayHello } from '../src/main'

describe('sayHello', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should say hello to the given string', () => {
    const spy = jest.spyOn(console, 'log')
    sayHello('Alice')
    expect(spy).toHaveBeenCalledWith('Hello Alice!')
  })
})
