import { useEffect, useState } from 'react'
import { CircleStop, Disc2, CircleSlash, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { DataTable } from './data-table'
import { columns } from './columns'
import { inspectIPC } from './ipc'

const Header = () => {
  const [isRecording, setIsRecording] = useState(true)

  useEffect(() => {
    inspectIPC()
  }, [])

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
      channel: 'REMOTE_BROWSER_GET_BUILTIN',
      listeners: 1,
      message: '["4-1","app",null]',
      size: 761,
      time: 90,
      send: true,
      sync: true,
    },
    {
      channel: 'REMOTE_BROWSER_MEMBER_CALL',
      listeners: 1,
      message: '[{"type":"value","value":"k8x/fOK14ypd/iHeK7hCmvRJc8ff6O3j75PePPhGHZ5zlm+e55Mg4VIOSFMvGFVynW9E9gxB\nORYP5ZNrorQ3giZTZxyDg2jc84yPBeC0WcUavWuKzTXTWouLzQUNVhFM2NXmAAWOPV3vppW\nU/Bmqi646ZArnKCmXnrsnVbYUwj5Omv2GPt0LjNc69zz7mmdPcyLYiCUyg2ps/tAshEjRRS\n3LtJjHETKr15afnqKA5X7OAvY2Veq/aJJ3hpgtFXsdezsGwGk7E9cmRE28OIM7et7H6hvXl\npRPAN1NE7w9nY0nrPa/cYlOWO6/RhDzsm+lZlenvN2DykpIr7iN6rRwcuu2vxEnfh5niHWP\nfsocpV5QK8VkKIQjYWgBSLyZ46zR1R03i/7OMEyBd7/ZpB3XIMd8XyjYNBNOa7SXBaG2N3p\nJTYKZ8wXCCLodxZut8N/4kW71xKLtBgnILeS49DFyrJBWHjuVnA8a/4hEIIfOFcYlIrQOws\nK87IOKVjCjWBcgxpapcvnXNb/vMAa1BkNblZlbrsNxC0YzpxZ6doD02PueEUn/6E1a3xkBW\nWgxSvZ4Wb0HOB3TMjTOKeAZt58dWMIl7U3zBndOi70EBNNDoV4ZxSi4v9zu0sXDpPsAJbgW\nLg1Rzd5p1EAwgUY5H+QL95tzR+k6jMhfTryqg6pJOIj+ePYMw5Ub+WNE0pjKOte6eG9zCHl\nEld98983HDO4d12Mt844UN1p9fa4134ELwAnIuFZi7glGWMr8aWX5G6LOxyRwv7UdrLo71+\nse5UIEdK63OmeMfB7h0TIxpBuqg38p1Ciq6WWC/EBF0pdcFIQvBVuqUfzc0FilqUgV5iIY3\n4QoMmVAsyJ945vSIhU="}]',
      size: 827000,
      time: 1180,
      send: true,
      sync: false,
    },
    {
      channel: 'REMOTE_BROWSER_GET_BUILTIN',
      listeners: 1,
      message: '["4-1","app",null]',
      size: 761,
      time: 90,
      send: false,
      sync: true,
    },
    {
      channel: 'REMOTE_BROWSER_MEMBER_GET',
      listeners: 1,
      message: '[{"type":"value","value":"/GB起"}]',
      size: 827,
      time: 1180,
      send: false,
      sync: false,
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
