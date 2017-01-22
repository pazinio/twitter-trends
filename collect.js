const { TWITTER } = require('./config/params')
const { dbg } = require('./utils')
const Twit = require('twit')

const T = new Twit({
  consumer_key:         TWITTER.key,
  consumer_secret:      TWITTER.secret,
  access_token:         TWITTER.token,
  access_token_secret:  TWITTER.token_secret,
  timeout_ms:           TWITTER.timeout,  // optional HTTP request timeout to apply to all requests.
})


//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
const trendSummary = (trend, date) =>
  T.get('search/tweets', { q: `${trend} since:${date}`, count: 100 })
  .then(data => dbg(data))
  .then(data => ({ total: data.length }))
  .catch(e => dbg(e))

const comparison = (date, trend1, trend2) => 
  Promise.all([
  	trendSummary(trend1, date),
  	trendSummary(trend2, date)
  	])
  .then(rs => rs.reduce((data, res, i) => data[`trend-${i}`] = res, {}))
  .catch(e => dbg(e))


module.exports = {
  comparison
}
