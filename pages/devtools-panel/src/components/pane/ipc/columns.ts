import { type ColumnDef } from '@tanstack/react-table'

type IPCMessage = {
  channel: string
  listeners: number
  message: string,
  size: number
  time: number
}

export const columns: ColumnDef<IPCMessage>[] = [
  {
    header: 'Channel',
    accessorKey: 'channel',
  },
  {
    header: 'Listeners',
    accessorKey: 'listeners',
  },
  {
    header: 'Message',
    accessorKey: 'message',
  },
  {
    header: 'Size',
    accessorKey: 'size',
  },
  {
    header: 'Time',
    accessorKey: 'time',
  },
]
