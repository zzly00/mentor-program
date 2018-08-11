import {stars} from './hw1'

describe("hw1", () => {
  it("should return correct answer when n = 1", () => {
    expect(stars(1)).toEqual(['*'])
  })
})
describe("hw1", () => {
  it("should return correct answer when n = 3", () => {
    expect(stars(3)).toEqual(["*", "**", "***"])
  })
})
describe("hw1", () => {
  it("should return correct answer when n = 6", () => {
    expect(stars(6)).toEqual(["*", "**", "***", "****", "*****", "******"])
  })
})
describe("hw1", () => {
  it("should return correct answer when n = 0", () => {
    expect(stars(0)).toEqual([])
  })
})