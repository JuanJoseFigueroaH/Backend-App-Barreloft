import db from '../utils/prisma.utils'
import { usersData } from '../data/users.data';

const usersSeeder = {
  async main () {
    for (const element of usersData) {
      await db.users.create({
        data: element
      });
    }
  },
  order: 90,
  fileName: 'users.seeder.ts'
}
export default usersSeeder
