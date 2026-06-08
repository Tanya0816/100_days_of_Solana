This is day 14 of learning Solana

Here are the answers for questions asked in day 13

1. Data like transaction history , wallet balance or smart contract logic ,which is publicly recorded directly on a blockchain is on-chain data. 
   I assumed data lives in one place but On-chain data exists across the data layer and the application layer on all the nodes which are a  part of the blockchain.

2. In EVM blockchain, for massive on-chain data, high gas fees is charged. In Solana ,there is a limit for the size of transaction message which constrains how much instruction and account metadata can be included in a single transaction.

3. A transaction consists of one or more instructions. In blockchain , unconfirmed transactions are stored in mempool but in Solana , there is no concept of mempool . Solana uses a protocol "Gulf Strem" to push transactions directly to the next producers ahead of time.

4. I thought that every transactions needs to be validated immediately by all the validators within a time constrant else the trnasaction will be cancelled. But the Proof of History in Solana creates a cryptographically encoding the passage of time directly into the blockchain. This eliminates overhead .

5. Rent in Solana and gas fees in Ethereum cannot be directly compared. 

6. Solana's performance is partly a software achievement, but also a hardware assumption. Unlike in many chains that optimize for low-end hardware, Solana expects validators to run powerful machines with high bandwidth. 

7. Bulk transactions are actively used in Solana. It handles multiple operations simultaneously using parallel processing. Solana can execute many non-conflicting transactions simultaneously because transactions declare which accounts they touch before. 

8. Yes, the test reponses in devnet and testnet can be diffrent depending on the purposes on Solana . Devnet acts as a  public sandbox while testnet is used by core developers and validators to test new features of blockchain . 

9. I thought wallets are universal can be used cross-chain but learning Solan made me realize that same wallet can be used in chains which uses same cryptographic functions. EVM chains use same cryptographic function but Solana uses SVM cryptographic function.   

10. Before learning Solana, I thought it was just another blockchain. What stands out now is its ability to process large numbers of low-cost transactions, making it suitable for applications where speed and transaction volume matter. 