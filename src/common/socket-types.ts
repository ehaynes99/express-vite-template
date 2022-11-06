export type ServerToClientEvents = {
  message: (message: string) => void
  ping: () => void
}

export type ClientToServerEvents = {
  message: (message: string) => void
}
