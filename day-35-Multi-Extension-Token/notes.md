This is day-35 of learning Solana

Building a Multi-Extension Token:

In Web2, a developer's job in a subscrition service is to wire all those transactions and features associated with those transaction .

In Solana, for this job, Token Extensions Program is used to compose all these capabilities at the protocol level. 

Solana does not allow adding features on after the fact, so for the token everything will be declare up front while the runtime enforces it all. 

Features of multi-extension mint :
It has three extensions enabled - transfer fees, an interest-bearing rate , and a metadata pointer. 

Commands used -

1. spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --decimals 2 --transfer-fee-basis-points 100 --transfer-fee-maximum-fee 500 --interest-rate 5 --enable-metadata 

// '--decimal 2' is used to set the token to 2 decimal places.
// '--transfer-fee-basis-points 100' is used to configure a 1% fee on every transfer 
// '--enable-metadata' reserves space for on-chain metadata.

2. spl-token initialize-metadata <MINT_ADDRESS> <YOUR_TOKEN_NAME> <YOUR_TOKEN_SYMBOL> <YOUR_TOKEN_URI>
// the token url is usually a json file which contains a name, symbol,description and image url.

3. spl-token display [Mint_Address]

4. spl-token create-account [MINT_ADDRESS]
// creating a token account 
5. spl-token mint [MINT_ADDRESS] 1000
// minting tokens
6. solana-keygen new --outfile ~/second-wallet.json --no-bip39-passphrase --force
7. spl-token create-account [Mint_Address] --owner ~/second-wallet.json --fee-payer ~/.config/solana/id.json
8. spl-token transfer [Mint_Address] 100 ~/second-wallet.json --expected-fee 1 --allow-unfunded-recipient
9. spl-token balance [Mint_Address]
10. spl-token balance [Mint_Address] --owner ~/second-wallet.json
11. spl-token display [Mint_Address]
12. spl-token accounts --owner ~/second-wallet.json -v
13. spl-token withdraw-withheld-tokens [Your_Token_Account] [Second_Wallet_Token_Account]
// Replace [YOUR_TOKEN_ACCOUNT] with your own token account address and [SECOND_WALLET_TOKEN_ACCOUNT] with the token account address from the previous command’s output. The withheld fee is transferred to your token account.

14. 