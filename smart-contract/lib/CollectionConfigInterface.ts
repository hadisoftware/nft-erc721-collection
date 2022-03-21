import NetworkConfigInterface from '../lib/NetworkConfigInterface';
import MarketplaceConfigInterface from '../lib/MarketplaceConfigInterface';

interface SaleConfig {
  price: number;
  maxMintAmountPerTx: number;
};

export default interface CollectionConfigInterface {
  testnet: NetworkConfigInterface;
  mainnet: NetworkConfigInterface;
  contractName: string;
  tokenName: string;
  tokenSymbol: string;
  maxSupply: number;
  publicSale: SaleConfig;
  contractAddress: string|null;
  uriPrefix: string|null;
  marketplaceIdentifier: string;
  marketplaceConfig: MarketplaceConfigInterface,
};