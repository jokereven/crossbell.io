import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import React from "react";

import { Chain, Wallet } from "../../../wallets";

export interface CoinbaseWalletOptions {
	chains: Chain[];
	appName: string;
}

export const coinbaseWallet = ({
	chains,
	appName,
}: CoinbaseWalletOptions): Wallet => {
	return {
		id: "coinbaseWallet",
		name: "Coinbase Wallet",
		icon: (
			<img
				className="absolute top-0 left-0 w-full h-full object-contain"
				src="/images/connect-kit/wallet-logos/coinbase.svg"
				alt="Coinbase Logo"
			/>
		),
		installed: isCoinbaseWallet(),
		createConnector: () => {
			const connector = new CoinbaseWalletConnector({
				chains,
				options: { appName: appName, headlessMode: true },
			});

			return {
				connector,
				chainId: chains[0].id,
				async qrCode() {
					return (await connector.getProvider()).qrUrl ?? null;
				},
			};
		},
	};
};

function isCoinbaseWallet(): boolean {
	if (typeof window === "undefined") return false;
	const { ethereum } = window;

	return !!(
		ethereum?.isCoinbaseWallet ||
		(ethereum?.providers &&
			ethereum?.providers.find((provider) => provider.isCoinbaseWallet))
	);
}
