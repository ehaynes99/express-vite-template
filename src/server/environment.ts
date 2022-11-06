import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const { NODE_ENV } = process.env

export const environment =
  NODE_ENV || fs.existsSync(`${__dirname}/../../ui`)
    ? 'production'
    : 'development'

export const isProduction = environment === 'production'
export const isDevelopment = environment === 'development'
