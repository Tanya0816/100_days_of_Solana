This is day 37 of learning Solana

for the past 3 days, I'v created three different tokens mints on Solana, each of those tokens with different extensions : 

1. An interest bearing token - This toekn has a continuous compounding rate to any mint. However, the on-chain balance does not changes instead a formula is used to display an interest-adjusted amount based on how much time has passed. This is how solana handles time-based calculations at protocol level.
   
2. A multi-extension token combining transfer fees with metadata - A token that has the capabilities of an interest-bearing token , has metadata and transfer fee. This token has space for every extension ans each feature works independently without conflicting with the others. 
   
3. A compliance-gated token with a default frozen account state -  On creating a token with the default state set to frozen, every single token account for that mint starts in a frozen state. No one can recieve , send, or burn tokens until the freeze authority explicitlty thaws their account. It is enforced at the protocol level so no API configuration or frontend bug can bypass it.