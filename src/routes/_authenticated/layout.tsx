import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { getSession } from '@/lib/better-auth'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ location }) => {
    const { data: session, error } = await getSession()

    if (error) {
      throw new Error(error.message ?? 'Session check failed')
    }

    if (!session) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
        replace: true,
      })
    }

    return {
      session,
      user: session.user,
    }
  },
  component: Component,
})

function Component() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="p-8">
        <Outlet />
      </div>
    </SidebarProvider>
  )
}
