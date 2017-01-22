module.exports = {
  TWITTER: {
  	key: process.env.TWITTER_CONSUMER_KEY || '',
  	secret: process.env.TWITTER_CONSUMER_SECERT || '',
  	token: process.env.TWITTER_ACCESS_TOKEN || '-',
  	token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET ||  '',
  	timeout: process.env.TWITTER_TIMEOUT_MS || 60*1000,  // optional HTTP request timeout to apply to all requests.
  }
}
