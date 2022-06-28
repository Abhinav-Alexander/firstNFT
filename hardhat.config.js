require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url:process.env.RINKEBY_API,
  accounts:[process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API
    }
  }
}