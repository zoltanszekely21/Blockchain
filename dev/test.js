const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = {
        "chain": [
        {
        "index": 1,
        "timestamp": 1621957097823,
        "transactions": [],
        "nonce": 100,
        "hash": "0",
        "previousBlockHash": "0"
        },
        {
        "index": 2,
        "timestamp": 1621957189465,
        "transactions": [],
        "nonce": 18140,
        "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e1285891210",
        "previousBlockHash": "0"
        },
        {
        "index": 3,
        "timestamp": 1621957304087,
        "transactions": [
        {
        "amount": 6.25,
        "sender": "00",
        "recipient": "552f4e9f2d68470a9f2ad8c720cf4308",
        "transactionId": "b0b13338793b4c6780f88e3cd6ddcd54"
        },
        {
        "amount": 50,
        "sender": "MIHAI452279HFGADG",
        "recipient": "ALEX496498JJGDNGDS",
        "transactionId": "a02a67a046374a86ada462825a23f4eb"
        },
        {
        "amount": 80,
        "sender": "MIHAI452279HFGADG",
        "recipient": "ALEX496498JJGDNGDS",
        "transactionId": "48e70570e5ae4333af966e56e35505d9"
        }
        ],
        "nonce": 57177,
        "hash": "0000b0cfdeb5f470949c04c428d7abf32a4ceaae184b7109c34789067aca2e87",
        "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
        "index": 4,
        "timestamp": 1621957374606,
        "transactions": [
        {
        "amount": 6.25,
        "sender": "00",
        "recipient": "ec86f32aa10443b5938a8a6d3026b268",
        "transactionId": "8646a0ac0c444b919b5fcd56c92ffe91"
        },
        {
        "amount": 100,
        "sender": "DANIELA452279HFGADG",
        "recipient": "MARIUS496498JJGDNGDS",
        "transactionId": "ce80b31194f34ec2874dfaa15521630d"
        },
        {
        "amount": 200,
        "sender": "DANIELA452279HFGADG",
        "recipient": "MARIUS496498JJGDNGDS",
        "transactionId": "2f67a6f41f264e7398526e88c8e4b643"
        },
        {
        "amount": 300,
        "sender": "MARIUS496498JJGDNGDS",
        "recipient": "ZOLTAN5646465fdsg",
        "transactionId": "311f4d7dcfca427e9e3950a1aec704ea"
        }
        ],
        "nonce": 12253,
        "hash": "000089f22225aa1f0c06721f8dda1eccf05520b153a8df4dc99d4149b026f12b",
        "previousBlockHash": "0000b0cfdeb5f470949c04c428d7abf32a4ceaae184b7109c34789067aca2e87"
        }
        ],
        "pendingTransactions": [
        {
        "amount": 6.25,
        "sender": "00",
        "recipient": "03a553a7260a4510b8172885ecaa2e4a",
        "transactionId": "693be038089c4791b2361ac854654646"
        }
        ],
        "currentNodeUrl": "http://localhost:3001",
        "networkNodes": [
        "http://localhost:3004",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:3005"
        ]
    };

    console.log( 'VALID: ', bitcoin.chainIsValid(bc1.chain))



