import { useState } from 'react'
import { CircleStop, Disc2, CircleSlash, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { DataTable } from './data-table'
import { columns } from './columns'

const Header = () => {
  const [isRecording, setIsRecording] = useState(true)

  return (
    <header className='flex items-center h-7 py-1 border-b border-gray-800'>
      <Button
        variant='ghost'
        size='icon'
        className='w-7 h-7'
        onClick={() => setIsRecording(!isRecording)}
      >
        {
          isRecording
            ? (
              <CircleStop color='#e46962' />
              )
            : (
              <Disc2 />
              )
        }
      </Button>
      <Button variant='ghost' size='icon' className='w-7 h-7'>
        <CircleSlash />
      </Button>
      <Separator orientation='vertical' className='mx-1' />
      <Button variant='ghost' size='icon' className='w-7 h-7'>
        <Filter />
      </Button>
      <Button variant='ghost' size='icon' className='w-7 h-7'>
        <Search />
      </Button>
      <Separator orientation='vertical' className='mx-1' />
      <div className='flex items-center space-x-2 mx-1'>
        <Checkbox id='preserveLog' className='w-3 h-3 rounded-xs flex items-center justify-center' />
        <Label htmlFor='preserveLog'>Preserve log</Label>
      </div>
    </header>
  )
}

const Main = () => {
  const data = [
    {
      channel: 'test',
      listeners: 1,
      message: 'test',
      size: 1,
      time: 1,
    },
    {
      channel: 'test',
      listeners: 1,
      message: 'test',
      size: 1,
      time: 1,
    },
  ]

  return (
    <main className='flex-1 w-full'>
      <DataTable columns={columns} data={data} />
    </main>
  )
}

const Footer = () => {
  return (
    <footer className='flex items-center h-7 py-1 border-t border-gray-800'>
      <h2>Footer</h2>
    </footer>
  )
}

export default function IPCPane () {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
