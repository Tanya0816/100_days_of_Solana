This is day 19 of learning Solana

Exploring errors and misconceptions of a transaction-

The errors in transaction can be checked the similar way we check errors in api we created. The only difference is the money spent. In web2, api testing costs no money while in web3, solana, the testing costs money even if the transaction failed. It is because the transaction was processed, validated by validators before the transaction failed. 

Signature Key: We know that whenever a transaction is passed, a signature key is generated which can be used to see the transaction in the solana explorer. 
While working on ways an error can occur in transaction, I learned something entirely different about what we know about signature.

Even if a transaction is not successful , we will still get a signature key which will show the failed transaction details in the solana explorer. 

The signature key shows the successful generation of a transaction but it does not confirms whether the transaction will be successful or not. 

In the tool i built, I tried to test how the tool will respond to errors. 
While learning errors, I unknowingly made silly mistakes which lead me to learn some new trick or concept. 

Mistake 1: In rpc url , instead of using "https://api.devnet.solana.com ", I accidently used "https://api/devnet.solana.com" wwhich resulted in "EAI_AGAIN" error.
 EAI_AGAIN - This is a DNS confirmation error which occurs when DNS fails to find the web page associated with the api given . The wrong rpc url  caused DNS to find the web page for literal "api" .

 NOTE : before running the script I created a new keypair from terminal forcefully and the tried to send the SOL from the empty wallet. 
 This made me learn that the transaction in SOL demands for fee even if there is no amount which means that a trnasaction requires enough balance to cover both the transfer amount and the transaction fee. If the balance is insufficient , the transaction fails. 

 NOTE : rent for the storage needed while fee is used at the time of transaction. 

 Comment what did you guys learn which was entirely different from what you know. 