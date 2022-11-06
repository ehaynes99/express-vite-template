import fs from 'fs'

const { NODE_ENV } = process.env

export const environment =
  NODE_ENV || fs.existsSync(`${__dirname}/../../ui`)
    ? 'production'
    : 'development'

export const isProduction = environment === 'production'
export const isDevelopment = environment === 'development'
