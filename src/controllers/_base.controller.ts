import db from '../utils/prisma.utils'

abstract class BaseController {
  protected db = db;
  // eslint-disable-next-line no-useless-constructor
  constructor () {}
}

export default BaseController;
