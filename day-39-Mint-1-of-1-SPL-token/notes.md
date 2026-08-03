This is day-39 of learning Solana

Minting a 1-of-1 SPL token :

Understanding the concept of NFTs - NFTs arelike unique database records with ownership history and provenance.

With respect to web2, NFTs can be said as the uniques row in a database which has only one owner, a significant value which cannot be subdivided or changed. 

Building a basic NFT using some terminal commands =
 1. Create a new token mint with zero decimal. Zero decimals are the tokens with no fractional units. 
 2. Create an associated token acount for that mint under your wallet. It will hold the single token.
 3. Mint exactly one token into that account. So, the total supply of the mint on the entire solana network will be one. 
 4. Disable the mint authority. Without mint authority, nonody can use it.
   
   Commands:
1. solana config set --url https://api.devnet.solana.com
2.  solana balance
3.  spl-token create-token --decimals 
4.  spl-token create-account [YOUR_MINT_ADDRESS 
5.  spl-token mint [YOUR_MINT_ADDRESS] 1
6.  spl-token authorize [YOUR_MINT_ADDRESS] mint --disable
7.  spl-token supply [YOUR_MINT_ADDRESS]