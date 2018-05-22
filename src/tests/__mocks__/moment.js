// we need this to mock out a given library
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
  return moment(timestamp)
}
