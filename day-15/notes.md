commands used for quick transfer on devnet so that I can inspect transaction.

solana-keygen new --no-bip39-passphrase -o /tmp/temp-wallet.json

solana transfer --allow-unfunded-recipient $(solana address -k /tmp/temp-wallet.json) 0.001 --url devnet

solana confirm -v YOUR_TRANSACTION_SIGNATURE

This is day-15 of learning Solana 

I learned about transaction anatomy -

When viewing a transaction in an explorer, the information is often grouped into sections such as
1. Summary
2. Accounts
3. Programs
4. Logs

Summary -
It contains details like -
  a. Status : States if the transaction was successful or not.
  b. Confirmation : States finanlized
  c. Signature : A 64 bytes signature authorizes the transaction. The first transaction is also the transaction ID.
  d. Fee payer: sender account address
  e. Slot
  f. Recent Blockhash: A 32 byte hash of a recent block. It is used to prove that the transaction was created recently.
  g. Fee : Fees used at the time of transaction in SOL 
  h. Transaction cost: Cost in lamports
  i. CUs consumed/Limit: CU consumed for the transaction to occur.
  j. Transaction version
  k. Timestamp

Accounts -
It contains addresses like- 
 a. Senders account address
 b. Receiver's account address
 c. System program (Owner address)

Programs -
It contains address of sender and receiver and program type along with the instruction data in HEX format as well as in JSON format 

Logs-
It contains information like program execution traces, instruction execution order, compute unit usage, error details. 

 Before inspecting a transaction, I assumed it was mainly a record of value transfer. After exploring it in an explorer, I realized a transaction also contains execution metadata, account references, instructions, and program interactions.
