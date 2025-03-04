import { evaluate } from '@/utils/debugger'

interface IPCEvent {
  channel: string
  data: unknown
  listenerCount: number
  sent: boolean
  sync: boolean
}

export const inspectIPC = () => {
  return evaluate(() => {
    // TODO: 放入存储
    const archiveList: IPCEvent[] = []

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { ipcRenderer } = require('electron')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const trackEvent = (channel: string, args: any[], sent = false, sync = false) => {
      let data
      try {
        archiveList.push({
          channel,
          data,
          listenerCount: ipcRenderer.listenerCount(channel),
          sent: !!sent,
          sync: !!sync
        })
        // console.log(channel)
      } catch (error) {
        console.error(error)
      }
    }

    const _safeDefineProperty = Object.defineProperty

    const originalEmit = ipcRenderer.emit
    _safeDefineProperty(ipcRenderer, 'emit', {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: function (channel: string, ...args: any[]) {
        trackEvent(channel, args)
        return originalEmit.apply(this, [channel, ...args])
      },
      writable: false,
      configurable: false
    })

    const originalSend = ipcRenderer.send
    _safeDefineProperty(ipcRenderer, 'send', {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: function (channel: string, ...args: any[]) {
        trackEvent(channel, args, true)
        return originalSend.apply(ipcRenderer, [channel, ...args])
      },
      writable: false,
      configurable: false
    })

    const originalSendSync = ipcRenderer.sendSync
    _safeDefineProperty(ipcRenderer, 'sendSync', {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: function (channel: string, ...args: any[]) {
        trackEvent(channel, args, true, true)
        const returnValue = originalSendSync.apply(ipcRenderer, [channel, ...args])
        trackEvent(channel, [returnValue], false, true)
        return returnValue
      },
      writable: false,
      configurable: false
    })
  })
}
