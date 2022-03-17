import { CustomError } from './custom-error'
export class NotConfirmPasswordError extends CustomError {
    statusCode = 401;

    constructor () {
      super('passwords do not match')
      // only because we are extending a built in class
      Object.setPrototypeOf(this, NotConfirmPasswordError.prototype)
    }

    serializeErrors () {
      return [
        { message: 'Passwords do not match' }
      ]
    }
}
