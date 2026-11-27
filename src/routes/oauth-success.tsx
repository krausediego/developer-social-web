import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/oauth-success')({
  component: OAuthSuccess,
})

function OAuthSuccess() {
  useEffect(() => {
    window.opener?.postMessage('oauth-success', window.location.origin)
    window.close()
  }, [])

  return null
}
