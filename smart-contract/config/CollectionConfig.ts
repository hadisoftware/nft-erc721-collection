import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'IpsumNFT',
  tokenName: 'Lorem Ipsum',
  tokenSymbol: 'IPSUM',
  maxSupply: 10,
  publicSale: {
    price: 0.0001,
    maxMintAmountPerTx: 3,
  },
  contractAddress: '0xff3f3a389acDDf17784110C6bCD7f3B921774123',
  uriPrefix: 'ipfs://bafybeihdultow5k4rqlb4zibpwmuk5ergtdkbxf2qb2lnogpie4ancddfa/',
  marketplaceIdentifier: 'lorem-ipsum',
  marketplaceConfig: openSea,
};

export default CollectionConfig;
