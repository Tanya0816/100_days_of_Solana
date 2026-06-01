This is day 7 of Learning Solana

Until now, I have talked about - 
1. Wallets
2. Account
3. Keypairs
4. Identity 
Now is the time we question everything we have learned untill now.
    
Q1. why do we even need account in Solana?
  Solana uses accounts as storage buckets unlike other blockchains like Ethereum where state is stored inside smart contracts.
  Code and data are divided in Solana, Executable logic is stored in program accounts while state, balance and user data lives in Storage/Data  Accounts.
  The system program is responsible for lamport transfer for the account it is assigned owner of. 

Rent :
Users need to pay rent (in lamports) to store data into separate accounts. The larger the amount of data, the higher the rent. 

Every account is Solana consists of  5 components:
 1. lamports
 2. data
 3. owner
 4. executable/non-executable
 5. rent_epoch

Q2. Who are owners in Solana?
 We often hear the term "owner" while working with any blockchain. Are we ( the user/developer) the owner? Or the concept is something else entirely. 

in WSL terminal I ran a command -
 solana account <wallet address>

 as an output I got public key, balance, owner, executable and rent_epoch where, 
 owner was equal to - 1111.....111 (a system program )

 So ,owner is an address and we are clearly not the owner of our wallet as we thought so.
  We cannot modify balance directly , only the system program can do that.
 
Q3.Is the owner address (system program)  same for every other developer/user. If yes, then can anyone be the owner?
  The system program verifies whether or not we (user) own the private key to the account or not .

 NOTE : Owner is Solidity is different from owner in Solana .
