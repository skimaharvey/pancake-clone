require("@nomiclabs/hardhat-waffle");
// require('dotenv').config()
require('dotenv').config()
require('hardhat-contract-sizer');

const {INFURA_URL, PRIVATE_KEY, PRIVATE_KEY_LOCAL} = process.env
// console.log(PRIVATE_KEY)
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

console.log(PRIVATE_KEY_LOCAL)

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 20,
      },
    },
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 300,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 300,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 300,
          },
        },
      }
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337,
      // accounts: [PRIVATE_KEY_LOCAL]
    },
    rinkeby: {
      url: `${INFURA_URL}`,
      accounts: [PRIVATE_KEY]
    }
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    // runOnCompile: true,
    strict: true,
    // only: [':ERC20$'],
  }
};
