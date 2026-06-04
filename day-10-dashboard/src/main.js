import { createSolanaRpc, devnet, address } from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const addressInput = document.getElementById("addressInput");
const fetchBtn = document.getElementById("fetchBtn");
const resultsDiv = document.getElementById("results");
const errorDiv = document.getElementById("error");
const loadingDiv = document.getElementById("loading");

fetchBtn.addEventListener("click", async () => {
  errorDiv.textContent = "";
  resultsDiv.innerHTML = "";
  loadingDiv.textContent = "Loading...";

  try {
    const targetAddress = address(addressInput.value.trim());

    // fetch balance 
    const { value: balanceInLamports } = await rpc.getBalance(targetAddress).send();
    const balanceInSol = Number(balanceInLamports) / 1000000000;

    // fetch recent transaction 
    const signatures = await rpc.getSignaturesForAddress(targetAddress, { limit: 5 }).send();

    // render balance
    let html = `<div class="balance">${balanceInSol} SOL</div>`;
    html += `<h3>Recent transactions </h3>`;

    if (signatures.length === 0) {
      html += `<p> No transactions found for this address.</p>`;
    }

    // Render transactions
    for (const tx of signatures) {
      const time = tx.blockTime ? new Date(Number(tx.blockTime) * 1000).toLocaleString() : "unknown";
      const statusClass = tx.err ? "status falied" : "status";
      const statusText = tx.err ? "failed" : "Success";

      html += `
      <div class = "tx>
      <div><string> Signature: </strong>${tx.signature}</div>
      <div><strong> Slot: </strong> ${tx.slot}</div>
      <div><strong>Time: </string> ${time}</div>
      <div class="${statusClass}"><strong>Status: </strong> ${statusText}</div> 
      </div>
      `;
    }

    resultsDiv.innerHTML = html;
  } catch (err) {
    errorDiv.textContent = `Error: ${err.message}`;
  } finally {
    loadingDiv.textContent = "";
  }
});