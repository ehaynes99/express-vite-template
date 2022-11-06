import express from 'express'
import { HelloMessage, sayHello } from '../../../common/hello'

export const helloRouter = express.Router()

helloRouter.get<any, any, HelloMessage, any, { name: string }>(
  '/',
  (req, res) => {
    const { name } = req.query

    res.status(200).json(sayHello(name))
  },
)
