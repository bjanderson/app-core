import { getAFlag } from 'app/app'

describe('app', function () {
  it('should work', function () {
    expect(true).to.equal(true)
  })

  describe('getAFlag', function () {
    it('should return true', function () {
      expect(getAFlag()).to.equal(true)
    })
  })
})
