require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue renew saddle method gloom civil army giggle'; 
let testAccounts = [
"0xeb3707111003e1c80e91048770fbc0e17b41d41c8ab9a54b228d7d25349a0b03",
"0xeddfb19b40fd5e0b24876e00edf70a3a9afdc909a014425f2a76027582c70196",
"0xd3dfd4ca0042346f1d2114861aad4453cb3700f52971dfd615149d21cdb014dc",
"0xd12202ea430a42d19f92ec76688218a07b31813e16a28cce53a15748afd62aa5",
"0x6624bbfad616dd1f6d4991d3c4bb056b45efc69b8764159a2bf9cc7b26aaf279",
"0xcd602627cf08b361ab391ac42350c0253b5df4db847330e136dedca877b342c5",
"0xb173ebbfc372c449f5c107e832b6d70294909e45a14959a96c8413b5128ffa01",
"0xa22f89688ff9bd079b12355495fd843fadf4b04c0273e328049ad8a0cdf4d77d",
"0x867fada02c1f3662988d0776bf824d47fa194a93f591e65a1d724843c80ba3db",
"0x30832fa24bc93656f0267babc44a0c36edcb2653a221496f9f2e4e09185fd22f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

