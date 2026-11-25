import { m } from '@/lib/paraglide/messages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <p>{m.profile_title()}</p>
    </div>
  )
}
