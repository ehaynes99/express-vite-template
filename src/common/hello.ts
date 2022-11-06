export type HelloMessage = {
  body: string
}

export const sayHello = (name: string): HelloMessage => {
  return { body: `hello, ${name}` }
}
