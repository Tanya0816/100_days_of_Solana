This is day 33 of learning Solana 

Over the past few days I have read about tokens, token programs , and learned how to create tokens from terminal and transfer them to other accounts. 

But if we look at how tokens also work in web2 , we'll notice that not everything can be trnasferred.

What if we try that analogy with tokens in Web3 ?

For this, Solana uses 'Token Extension Program'. It uses non-transferable extension ,so every token created from mint is permanently locked to the wallet it lands in. 

I used some commands in terminal to create a token which cannot be transferred to any other account after being created and stored in an account.
Here are the commands-

1. spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --enable-non-transferable
2. spl-token create-account YOUR_MINT_ADDRESS --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
3. spl-token mint YOUR_MINT_ADDRESS 10 --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
4. spl-token balance YOUR_MINT_ADDRESS --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
5. solana-keygen new --outfile ~/experiment-wallet.json --no-bip39-passphrase --force
6. spl-token create-account YOUR_MINT_ADDRESS --owner ~/experiment-wallet.json --fee-payer ~/.config/solana/id.json --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
7. spl-token transfer YOUR_MINT_ADDRESS 5 EXPERIMENT_WALLET_PUBLIC_KEY --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --allow-unfunded-recipient  (This command will fail because you are trying to send an non-transferable token to another account)

