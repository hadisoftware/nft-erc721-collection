import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Names99NFT',
  tokenName: '99 Names of Allah',
  tokenSymbol: 'NAME',
  maxSupply: 99,
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 20,
  },
  contractAddress: '0xE1B28a780FB0EDf0F1Bde2bF19140aa6fE5D2aFF',
  uriPrefix: 'ipfs://bafybeidvrv3yec3jznffscccgmgsijc75ecsndorwjgxzjpdnrpulcxqea/',
  marketplaceIdentifier: '99-names-of-Allah',
  marketplaceConfig: Marketplaces.openSea,
};

export default CollectionConfig;
