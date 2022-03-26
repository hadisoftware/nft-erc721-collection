# NFT Deployment Steps

## IPFS Uploader
1. Package bulk images using this command:
  - `npx ipfs-car --pack ./images --wrapWithDirectory false --output ./my_images.car`
2. Update `index.js` with hardcoded data
3. Run `node index.js`

## Smart Contract
1. Add `.env` file and update values
2. Use Node version 16 and run `yarn`
3. Update `CollectionConfig.ts`
4. In separate terminal:
  - Must use same node version as above
  - Run `npx truffle dashboard` then connect wallet
5. Run `yarn deploy --network truffle`
6. Update `CollectionConfig.ts` with contract address
7. Run `yarn verify {contract-address} --network truffle`
8. Set paused to `false` at Etherscan contract
9. Mint first token to fully activate contract

## Minting Dapp
1. Use Node latest for and run `yarn`
2. Run `yarn dev-server` to test locally
3. Run `yarn build` and deploy `public` folder

## OpenSea
1. Create new collection and import contract
2. Edit the collection with image, description, and royalty fee
3. Create sales listing from each NFT

---

## NFT Details
- Quran Verses NFT
  - Contract: 0x5BfeAE4450eF5a4D86A564A606Da66dDe5D18d34
  - Metadata: ipfs://bafybeiahslkecythtbscy4bwevjv4djsm45kvoe4q4vblnimqyc4vwqpca
  - Images: ipfs://bafybeiho4vmzj7fpi4uvluvsc4x3wl5wkf6gqzmw52legr5pgkbevuizzi
- 99 Names of Allah NFT
  - Contract: 0xE1B28a780FB0EDf0F1Bde2bF19140aa6fE5D2aFF
  - Metadata: ipfs://bafybeidvrv3yec3jznffscccgmgsijc75ecsndorwjgxzjpdnrpulcxqea
  - Images: ipfs://bafybeiaduh25tt2izab4zq2dsqcjyt5ilp3ujwcelvpaz2hgeioyy5dg4a