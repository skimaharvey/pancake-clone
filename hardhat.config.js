require("@nomiclabs/hardhat-waffle");
require('dotenv').config()


const {INFURA_URL, PRIVATE_KEY, PRIVATE_KEY_MUMBAI} = process.env

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.5.0",
      }
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `${INFURA_URL}`,
      acounts: [PRIVATE_KEY]
    }
  }
};
