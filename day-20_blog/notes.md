This is day 20 of learning Solana

This is the summary of everything I have learned about transaction in Solana-

Transaction are not just messages or amount send. Transaction contains metadata,instructions, accounts and  programs.

When a transaction is processed, a signature key is generated which is used to check details of the transaction in the solana explorer. 

There are more than one account used in the transaction where the program account (owner account) is one of those accounts.

Signature key works like the confirmation that a transaction is processed but it does not control the success or failure of the transaction. However using the generated signature key, the transaction details can easliy be viewed on Solana Explorer. 

The flow of a transaction in Solana is similar to the transaction in Stripe or Paypal (websites used for payments).

In Solana, the transaction does not waits in the mempool like in EVM blockchain 
The transaction is broadcasted to the entire node using an RPC url when it is created. This transaction is then validated by the validators present in the network. Validators get paid when they validate a trnasaction, this is the reason why transaction fee is taken whenever their is any transaction. 

