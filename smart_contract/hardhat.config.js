//https://eth-ropsten.alchemyapi.io/v2/zCc58cjIqj5yT51nEwGJ_3gMHpzMD4B6

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/M53AZkC5VPhi_cRR4M4ZZZqJ5nMHRfDl',
      accounts: ['3538b256e7e8e76f1a0f74dc2532f273afe1f11389135873685c1d3568c895f5']
    }
  },
} 
