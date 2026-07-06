This is day 34 of learning Solana-

Created an Interest-bearing Token in terminal -

It uses the concept used in fintech apps (in web2) to show an interest rate. 

Solana has this concept in built into the token layer.The Token Extension Program includes an interest-bearing extension that attches a continuous compounding rate to any mint. 
The balance does not gets affected. 

Commands I used- 
1. spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --interest-rate 500  (Created a token with interset rate of 500)
2. spl-token create-account MINT_ADDRESS --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
Creating account FSTUx34eV (Created an account to save the new token in this account).
3. spl-token mint YOUR_MINT_ADDRESS 1000 \
  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb (Minted 1000 tokens to the new account)
4. spl-token balance YOUR_MINT_ADDRESS \
  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb (Checking raw token balance).
5. spl-token display YOUR_MINT_ADDRESS \
  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb (This is used to check the interest rate ).
6. spl-token set-interest-rate YOUR_MINT_ADDRESS 15000 (Changed the interest rate to 15000).