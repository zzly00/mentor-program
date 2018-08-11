import {add} from './hw5'

describe("hw5", () => {
  it("should return correct answer when a=10 and b=10", () => {
    expect(add('10', '10')).toBe('20')
  })
})
describe("hw5", () => {
  it("should return correct answer when a=123 and b=456", () => {
    expect(add('123', '456')).toBe('579')
  })
})
describe("hw5", () => {
  it("should return correct answer when a=12312383813881381381 and b=129018313819319831", () => {
    expect(add('12312383813881381381', '129018313819319831')).toBe('12441402127700701212')
  })
})
describe("hw5", () => {
  it("should return correct answer when a=999 and b=111", () => {
    expect(add('999', '111')).toBe('1110')
  })
})
describe("hw5", () => {
  it("should return correct answer when a=1234 and b=777", () => {
    expect(add('1234', '777')).toBe('2011')
  })
})
describe("hw5", () => {
  it("should return correct answer when a=1234 and b=8888", () => {
    expect(add('1234', '8888')).toBe('10122')
  })
})