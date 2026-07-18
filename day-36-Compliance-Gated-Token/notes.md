This is day-36 of learning Solana

Building a Permissioned Token System

In Web2, many platforms do not allow users to perform actions immediately after creating an account. A user might need to verify their identity, confirm an email address, or complete some verification before getting access to all the features.

Solana follows a similar concept using the Default Account State extension.

When a token mint is created with the default state set to Frozen, every new token account associated with that mint starts in a frozen state. This means the account cannot send, receive, or burn tokens until the Freeze Authority explicitly approves (thaws) it.

Unlike Web2, where this logic is usually implemented in the backend, Solana enforces it at the protocol level. This means the restriction cannot be bypassed because of a frontend bug or an API mistake.

Today's learning was about building a permissioned token system where I:

1. Created a token mint with the default account state set to Frozen.
2. Created multiple token accounts for that mint.
3. Selectively thawed specific accounts using the Freeze Authority.
4. Observed how approved and frozen accounts behaved differently while interacting with the token.

This is one of the ways regulated assets or permissioned applications can control who is allowed to use a token on Solana.
