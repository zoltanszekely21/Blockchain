# Blockchain
Prototype blockchain written in JavaScript which implements a Proof of Work method, Consensus algorithm and follows best practices for developing decentralized blockchain networks.


## Prerequisites:

[1. Node.js](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x86.msi)

[2. Visual Studio 2019](https://visualstudio.microsoft.com/downloads/)

[3. Postman](https://www.postman.com/downloads/)


## Getting Started

The first step in running this project is to run `npm install`.

In our terminal, we open the project path and run `code .`  to open it in VS Code.

We will start each server ( 5 in total) on `localhost:3001, 3002, 3003, 3004, 3005` with the command `npm run node_1`.

We do the same with each node.

After starting the desired nodes, we can check the blockchain with the `/blockchain` endpoint. 

Example: `localhost:3001/blockchain`

We can see that each port has a genesis block (the first block in the chain).


## Using Postman 

We use Postman to register the nodes in the network and create transactions, broadcasting both to the whole network.

In Postman: select `POST`  - > `http://localhost:3001/register-and-broadcast-node` 

To write our parameters we select `Body` , `raw` and change `text` to `JSON`.

In the parameters we specify the node we want to add:

{

  "newNodeUrl" : "http://localhost:3002"
 
}
													  
If successfull, we will get the `{ note: 'New node registered with network successfully.' }` output in Postman.
													  
We can add any of the 5 nodes we want or all of them.



## Mining

After registering our nodes in the network, we can mine blocks.

To mine (create) a new block, we use the `/mine` endpoint on any of the 5 ports. (Ex: `localhost:3004/mine`)	

A new block will be created with `index: 2`, showing on all ports.	

A pending transaction of `6.25` will appear. This is the mining reward given to us for mining a new block.

The amount will be added in our next block mined (`index: 3`).		



## Adding transactions		

We use Postman to add transactions and broadcast them in the network using:
`POST` -> `http://localhost:3001/transaction/broadcast`

New transaction example: 

{

    "amount": 50,
    "sender": "JOHN452279HFGADG",
    "recipient": "ALEX496498JJGDNGDS"
     
}


If successfull, we will get the `{ note: 'Transaction created and broadcast successfully.' }` output in Postman and our transaction will appear in the chain at pendingTransactions.

Any new transaction will be included in the next newly mined block.



## UI: Block Explorer

We can access the UI through the `/block-explorer` endpoint. (Ex: `localhost:3001/block-explorer`)

This is an `index.html` file with different functionalities for interacting with the blockchain.




							  
