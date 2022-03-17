import { httpServer } from './app'

const start = async () => {
  // if(!process.env.JWT_KEY) {
  //     throw new Error('jwt must be defined')
  // }
  const PORT = process.env.PORT || 3009;
  process.env.NODE_ENV = 'dev'
  if (!PORT) {
    throw new Error('Port must be defined')
  }
  console.log(process.env.NODE_ENV)
  try {
    httpServer.listen(PORT, () => {
      console.log(`listen on port: ${PORT} backend barreloft app.`)
      console.log(`Swagger route: http://localhost:${PORT}/swagger`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
