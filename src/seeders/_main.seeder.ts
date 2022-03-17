import db from '../utils/prisma.utils'
import filesToSeed from './_join.seeder'

function showOrder () {
  filesToSeed.forEach((item, index) => {
    console.log(`${index + 1}: ${item.fileName}  priority: ${item.order}`)
  })
}

async function seed () {
  console.log('SEED ORDER:')
  const sleep = (waitTimeInMs: number) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
  showOrder()
  await sleep(8000)
  console.log('START SEED PROCESS')
  for (const file of filesToSeed) {
    console.log('🌱 seeding file:' + file.fileName)
    await file.main().catch(e => {
      console.error(e)
      process.exit(1)
    }).finally(async () => {
      await db.$disconnect()
    })
  }
  console.log('FINISHED SEED PROCESS')
  process.exit(1)
}

seed().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await db.$disconnect()
})
