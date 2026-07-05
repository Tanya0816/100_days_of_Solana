import { generateKeyPairSigner, createSolanaRpc, address, devnet } from "@solana/kit";

// generate a brand new kaypair
const rpc = createSolanaRpc("https://api.devnet.solana.com");
const wallet = await generateKeyPairSigner();
const m_address = address("Add_Metamask_Solana_address");

console.log("Your new wallet address:", wallet.address);
console.log(
    "\nThis address is the public key , safe to share"
);

// to check a specific address you've already funded :-
const { value: balance } = await rpc.getBalance(m_address).send();
const balanceInSol = Number(balance) / 1_000_000_000;
console.log(`Balance: ${balanceInSol} SOL`);



