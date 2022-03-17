import { sendMailSendgrid, getSendgridCredentials } from '../utils/mail.utils'
import { configMail } from '../config/mail.config'
const mailService = {
  async sendWelcomeEmailClient (email: string, name: string, token:string, userId: number) {
    const credentials = await getSendgridCredentials()
    await sendMailSendgrid(credentials.apiKey, [email], credentials.fromEmail,
      configMail.fromEmailNameGlobal, configMail.subjectMessageNewUser, configMail.textNewUser, configMail.textHTMLNewUser(name, token, userId, process.env.URL_BASE_FRONTEND_CLIENT!))
  },
  async sendWelcomeEmailProducer (email: string, name: string, token:string, userId: number) {
    const credentials = await getSendgridCredentials()
    await sendMailSendgrid(credentials.apiKey, [email], credentials.fromEmail,
      configMail.fromEmailNameGlobal, configMail.subjectMessageNewUser, configMail.textNewUser, configMail.textHTMLNewUser(name, token, userId, process.env.URL_BASE_FRONTEND_PRODUCER!))
  },
  async sendConfirmEmailSuccess (email: string, name: string, url:string) {
    const credentials = await getSendgridCredentials()
    await sendMailSendgrid(credentials.apiKey, [email], credentials.fromEmail,
      configMail.fromEmailNameGlobal, configMail.subjectMessageEmailConfirmed, configMail.textEmailConfirmedUser, configMail.textHTMLEmailConfirmed(name, email, url))
  },
  async resendEmailVerification (email: string, name: string, token:string, userId: number, roleId: number) {
    const credentials = await getSendgridCredentials()
    if (roleId === 1) {
      await sendMailSendgrid(credentials.apiKey, [email], credentials.fromEmail,
        configMail.fromEmailNameGlobal, configMail.subjectMessageNewUser, configMail.textNewUser, configMail.textHTMLResendConfirmation(name, token, userId, process.env.URL_BASE_FRONTEND_CLIENT!))
    } else if (roleId === 2) {
      await sendMailSendgrid(credentials.apiKey, [email], credentials.fromEmail,
        configMail.fromEmailNameGlobal, configMail.subjectMessageNewUser, configMail.textNewUser, configMail.textHTMLResendConfirmation(name, token, userId, process.env.URL_BASE_FRONTEND_PRODUCER!))
    }
  },
  async sendResetPassword (name: string, last_name: string, code: number, email: string) {
    const credentials = await getSendgridCredentials()
    await sendMailSendgrid(credentials.apiKey, [email], credentials.fromEmail,
      configMail.fromEmailNameGlobal, configMail.subjectMessageResetPassword, configMail.textResetPassword, configMail.textHTMLResetPassword(name, last_name, code))
  }
}

export default mailService;
