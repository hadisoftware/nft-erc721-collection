import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
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
  contractAddress: '0x5BfeAE4450eF5a4D86A564A606Da66dDe5D18d34',
  uriPrefix: 'ipfs://bafybeiahslkecythtbscy4bwevjv4djsm45kvoe4q4vblnimqyc4vwqpca/',
  marketplaceIdentifier: 'quran-verse',
  marketplaceConfig: Marketplaces.openSea,
};

export default CollectionConfig;
