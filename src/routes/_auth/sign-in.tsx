import { SignInLeftSide } from '@/modules/auth/sign-in/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="w-full min-h-screen grid lg:grid-cols-2">
      <SignInLeftSide />
      <div className="bg-muted hidden lg:flex"></div>
    </main>
  )
}
