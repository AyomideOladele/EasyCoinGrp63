require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/IQaZwKbt_hKoD2ngxepsDVtsBWItRRes',
      accounts: ['6fb70af7f5f5b01e9a303d8dc597e506c6b922bc662c5dcdbd85ea7266384832'],
    },
  },
};


