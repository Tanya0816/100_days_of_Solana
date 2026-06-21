This is day 25 of learning Solana 

Understanding System Program in Solana Account-

System Program can also be said as the owner of the account which has an address containing string of 1.

System Program acts as Solana's core kernel, it works as the only program which is creating new accounts in the network. 


Q1: SO does that mean if anyone explointed the contract/program , now the attacker will have the access to owner since it stays a string of 1 for everyone?

Ans: When someone exploits a program , they don't get control of the system program. The owner is the address of the system program. The 'owner' means that the system program has the permission to modify some specific parts of the account.
