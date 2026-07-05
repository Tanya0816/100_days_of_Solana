import { createSolanaRpc, devnet, address } from "@solana/kit";

// connect to solana devent
const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const targetAddress = address("7Q2UicnbyqRPSTugXuzJG6zibmdCMCvnz3yTtGAP3AVv");

// Query the balance, similr to calling a REST API
const { value: balanceInLamports } = await rpc.getBalance(targetAddress).send();

const balanceInSol = Number(balanceInLamports) / 1_000_000_000;

console.log(`Address: ${targetAddress}`);
console.log(`Balance: ${balanceInSol} SOL`);
console.log(`Balance in lamports: ${balanceInLamports}`);



