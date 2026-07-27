This is day-38 of learning Solana -

Designing a Revocable Credential Token with Non-Transferable and Permanent Delegate Extensions: 

In web2, credentials and certificates follow a specific lifestyle. Those certificates belongs to only the person who earned them and cannot be transferred or sold to someone else. 

Using the similar analogy, in Solana we have extensions like :
1. the non-transferable extension 
2. the permanent delegate extension .
   
Using these two extension a token can be created which cannot be transferred to any other account. 

Commands used to create this token : 
1. spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --decimals 0 --enable-non-transferable --enable-permanent-delegate --enable-metadata

('--decimal 0 ' is used because credentials are whole units; you either have one or you do not.)

2.  spl-token initialize-metadata [MINT_ADDRESS]"Solana Dev Credential" "CRED" "https://example.com/credential.json"


3.  solana-keygen new --outfile ~/recipient-wallet.json --no-bip39-passphrase --force
RECIPIENT=$(solana-keygen pubkey ~/recipient-wallet.json)

4. spl-token create-account [MINT_ADDRESS] --owner $RECIPIENT --fee-payer ~/.config/solana/id.json --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb

5. spl-token mint [MINT_ADDRESS] 1 --recipient-owner $RECIPIENT --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
6. solana-keygen new --outfile ~/third-party.json --no-bip39-passphrase --force
   
7. THIRD_PARTY=$(solana-keygen pubkey ~/third-party.json)
   
8. spl-token transfer [MINT_ADDRESS] 1 $THIRD_PARTY 
  --owner ~/recipient-wallet.json 
  --fee-payer ~/.config/solana/id.json --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --fund-recipient --allow-unfunded-recipient

9. spl-token burn [RECIPIENT_TOKEN_ACCOUNT_ADDRESS] 1 --owner ~/.config/solana/id.json --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
10. spl-token balance [MINT_ADDRESS] --owner $RECIPIENT --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb

11. spl-token display [MINT_ADDRESS] --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb