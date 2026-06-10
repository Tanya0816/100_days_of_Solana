This is day 16 of learning Solana

I learned how one can transfer SOL from scratch -

The transaction process in Solana is similar to how payment is done in Stripe or paypal.
The flow is -
Authenticate -> Specify a recipient -> set an amount -> Submit.

When the transaction is send from terminal using public key , the transaction is broadcasted to the solana network through an RPC node.

Usually transaction states yes in mempool. In Solana, there is no concept of mempool, the  transactions are routed directly to the network's current block producers (called leaders).

The transaction lifecycle is -
 1. RPC provider: Terminal uses an RPC provider to submit the signed transaction. 
 2. The TPU (Transaction Processing Unit): The RPC node forwards the transaction to the Solana TPU port of the current leader.
 3. Execution: The leader node processes the transaction and bundles it into the block if it is valid.
 4. Block Propagation: The leader streams the block containing the transaction to the rest of the validator network for confirmation using a protocol called  Turbine.

Sending transaction from terminal using commands-

solana config set -ud
solana airdrop 2
solana-keygen new --outfile ~/recipient-keypair.json --no-bip39-passphrase  
solana transfer <public key> amount --allow-unfunded-recipient
solana balance

In above command, I used 'recipient-keypair.json' which created a new wallet so when I used my own public key , the amount deducted from my default wallet to the newly created wallet. 

The '--allow-unfunded-recipient' is used because the newly created wallet has never received SOL before. Once the wallet is funded, we can run transfer command for the same wallet i.e. sam public key without using '--allow-unfunded-recipient'.