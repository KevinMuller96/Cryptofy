// https://eth-ropsten.alchemyapi.io/v2/W4dLqG_HiyvpR65s8Cq7j-C4p-QuCKpQ

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/W4dLqG_HiyvpR65s8Cq7j-C4p-QuCKpQ",
      accounts: [
        "05e47210dc3a7eb96cf5ad0d4a3ef94c6c74ae15373e5fe4e65cfc215d875d89",
      ],
    },
  },
};
