import { CarIndexedReader } from '@ipld/car'
import { NFTStorage } from 'nft.storage'

const endpoint = 'https://api.nft.storage' // the default
const token = '***' // 1. Enter your API key from https://nft.storage/manage, KEEP SECRET!!!!

async function main() {
  const storage = new NFTStorage({ endpoint, token })

  // Package car: npx ipfs-car --pack ./images --wrapWithDirectory false --output ./my_images.car

  const expectedCid = '***' // 2. Update with CID of car
  console.log({ expectedCid })

  // Create the car reader
  const carReader = await CarIndexedReader.fromFile(
    `${process.cwd()}/***.car` // 3. Update with name of car
  )

  console.log('go')

  // Send the CAR to nft.storage, the returned CID will match the one we created above.
  const cid = await storage.storeCar(carReader)

  // Verify the service stored the CID we expected
  const cidsMatch = expectedCid === cid
  console.log({ cid, expectedCid, cidsMatch })

  // Check that the CID is pinned
  const status = await storage.status(cid)
  console.log(status)
}

main()