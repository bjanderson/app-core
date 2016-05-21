import config from 'app/config'

describe('config', function () {
  it('should work', function () {
    expect(true).to.equal(true)
  })

  it('should have aFlag set to true', function () {
    expect(config.aFlag).to.equal(true)
  })
})
