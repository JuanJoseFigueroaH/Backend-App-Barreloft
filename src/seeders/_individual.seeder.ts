import { messyFiles, compare } from './_join.seeder'
import inquirer from 'inquirer'
import db from '../utils/prisma.utils'
const options = messyFiles.sort(compare);

const optionsFormat = options.map((item, index) => {
  return {
    key: index,
    value: item.fileName
  }
})
inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'picked',
      message: 'Which Seeds files do you want run seed?',
      choices: optionsFormat
    }
  ])
  .then(res => {
    res.picked.forEach((element:string) => {
      // eslint-disable-next-line array-callback-return
      options.map(i => {
        if (i.fileName === element) {
          console.log('🌱 seeding file:' + i.fileName)
          i.main().catch(e => {
            console.error(e)
            process.exit(1)
          }).finally(async () => {
            db.$disconnect()
          })
        }
      })
    });
  });
