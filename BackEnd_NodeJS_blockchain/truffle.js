// Allows us to use ES6 in our migrations and tests.


//llows us to use ES6 in our migrations and tests.

require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      gas: 6600000,
      network_id: '*' // Match any network id
    }
  }
}

/*
require('babel-register')
const mnemonic = process.env.MNEMONIC
const HDWalletProvider = require('truffle-hdwallet-provider')
module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/qBdtbGA9jE1roa6QUkaM")
      },
      network_id: 3,
      gas: 1000000,
      gasPrice: 10000000000
    }   
  },

}*/