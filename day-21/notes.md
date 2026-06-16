This is day 21 of learning Solana 

For the past few days I have been talking about transaction and the tool I built for transaction. 

The tools is nothing but a CLI tool which can be used to transfer SOL to any other address. 

Working of the tool -
 1. It connects to devnet using RPC url and WS usl.
 2. Loads the sender keypair
 3. Check if the sender has sufficient balance to send the givem sol amount and pay transaction fee.
 4. Builds the transaction.
 5. Signs the transaction which gets us the signature key.
 6. Send the transaction.
 7. Shows the updated balance in the sender balance if the transaction is successful.