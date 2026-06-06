import { createSolanaRpc, devnet, mainnet, address } from "@solana/kit";

// two separate RPC connections: 1 for devnet, another one for mainnet.
const devnetRpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const mainnetRpc = createSolanaRpc(mainnet("https://api.mainnet-beta.solana.com"));

// the token-2022 prorram exists on both networks
const targetAddress = address("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");

async function getNetworkData(rpc, networkName) {
    const { value: balanceInLamports } = await rpc.getBalance(targetAddress).send();
    const balanceInSol = Number(balanceInLamports) / 1000000000;

    const signatures = await rpc.getSignaturesForAddress(targetAddress, { limit: 3 }).send();

    console.log(`\n-- ${networkName}---`);
    console.log(`Address: ${targetAddress}`);
    console.log(`Balance: ${balanceInSol} SOL`);
    console.log(`Recent transactions : ${signatures.length}`);

    console.log(`Recent Signatures: ${signatures.map((s) => s.signature).join(", ")}`);

    for (const tx of signatures) {
        const time = tx.blockTime
            ? new Date(Number(tx.blockTime) * 1000).toLocaleString()
            : "unknown";
        console.log(` ${tx.signature.slice(0, 20)}... slot ${tx.slot} ${time}`);
    }
}

await getNetworkData(devnetRpc, "Devnet");
await getNetworkData(mainnetRpc, "Mainnet");

console.log("\n--- Summary ---");
console.log("Same address, same RPC calls, different networks, different data");