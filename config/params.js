module.exports = {
  TWITTER: {
  	key: process.env.TWITTER_CONSUMER_KEY || '6FDysaWycSS5dhCPA18oAfXsz',
  	secret: process.env.TWITTER_CONSUMER_SECERT || 'XgSqTrn8on8Io14ocPfqTJKQa4A4pdFByGphzL7HUvB0xzdH73',
  	token: process.env.TWITTER_ACCESS_TOKEN || '372703031-yH8tSamXSqcwmLBEzdKOp3G7Ae1dihodf1AleA9a',
  	token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET ||  'NqjlSR34aF2wvwKQfpVe59pqgUxwbuSPlgFo3X2OPLcRL',
  	timeout: process.env.TWITTER_TIMEOUT_MS || 60*1000,  // optional HTTP request timeout to apply to all requests.
  }
}