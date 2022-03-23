import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'QuranNFT',
  tokenName: 'Quran Verse',
  tokenSymbol: 'VERSE',
  maxSupply: 6236,
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 100,
  },
  contractAddress: '0xbEe6A77bB4078A37dBAF2729d3028d398FB720Ad',
  uriPrefix: 'ipfs://bafybeihdultow5k4rqlb4zibpwmuk5ergtdkbxf2qb2lnogpie4ancddfa/',
  marketplaceIdentifier: 'quran-verses',
  marketplaceConfig: openSea,
};

export default CollectionConfig;
