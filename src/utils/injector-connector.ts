import { InjectedConnector } from "@web3-react/injected-connector";

// Chain IDs:
// 1 - Ethereum Mainnet
// 3 - Ropsten Test Network
// 4 - Rinkeby Test Network
// 5 - Goerli Test Network
// 42 - Kovan Test Network
// 56 - Binance Smart Chain
// 97 - Binance Smart Chain - Testnet

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});
