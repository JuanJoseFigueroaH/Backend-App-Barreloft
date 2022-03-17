import filesToSeed from './_join.seeder'

function showOrder () {
  filesToSeed.forEach((item, index) => {
    console.log(`${index + 1}: ${item.fileName}  priority: ${item.order}`)
  })
}

showOrder()
