import { useState } from 'react'
// import { Bug } from 'lucide-react'
import { withErrorBoundary, withSuspense } from '@extension/shared'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import type { Pane } from '@/components/pane'
import { Panes } from '@/components/pane'
import { ThemeProvider } from '@/components/theme-provider'

import '@/panel.css'

const Panel = () => {
  const [activePane, setActivePane] = useState<Pane>('ipc')
  const ActivePane = Panes[activePane]

  return (
    <ThemeProvider defaultTheme='dark' storageKey='ui-theme'>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar
          onPaneChange={setActivePane}
          activePane={activePane}
        />
        <main className='w-full'>
          {/* <header className='px-2 border-b border-gray-800'>
            <Button
              variant='ghost'
              size='icon'
              className='w-7 h-7'
              onClick={() => window.open('https://github.com/maopy/devtron/issues', '_blank')}
            >
              <Bug />
            </Button>
          </header> */}
          <ActivePane />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default withErrorBoundary(withSuspense(Panel, <div> Loading ... </div>), <div> Error Occur </div>)
