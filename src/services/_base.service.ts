import db from '../utils/prisma.utils'
abstract class BaseService {
  protected db = db;
  // eslint-disable-next-line no-useless-constructor
  constructor () {}
}

export default BaseService;
