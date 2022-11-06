import express from 'express'
import * as routes from './routes'

export const apiRouter = (() => {
  const apiRouter = express.Router()
  for (const [route, router] of Object.entries(routes)) {
    apiRouter.use(`/${route}`, router)
  }
  return apiRouter
})()
