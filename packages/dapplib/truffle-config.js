require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember column hidden drip flower spirit'; 
let testAccounts = [
"0x6c921dca9b849dabc03feeaaae644ad8a770343db7336e37563cc5ab5c59bd98",
"0x0347fd85fd091269adfa8a4339ea31653983e0e618258116c19ccdded7458078",
"0x178dbb560bea49a7f010bb1087b7e555db7908d48973cd45e1fc51e5adb5a54f",
"0xf6edf739b3ac44e94facf8be0b45e78bf62f6bbc3372ad972bdbe46f52b38ff8",
"0x29d27446253efe10210493b8ef8f252f4d0361266154a53f64f8c4d7b830626b",
"0x91aee6c417b32ad70929ff71cf7aedd0f5872933743d965bcf2290082ab04965",
"0xc1c30df61b5fc5428fe4bd0bed58d36b4a21efa94f520f06571cdfe60f161260",
"0xa926ace2f8e81b8b5b8048dfa2e1ffd13bd2499f6be18db8d3aca4d66c5bc617",
"0xcb8d5137f1b6b6b98d1cdb6c884f9fc37ab5bce6e599f9d835ac93364278bf4d",
"0x06e3e0e993221ed784e5b6f09c813b0fc71d24d0927badc56c26df5b024943b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

