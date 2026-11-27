import { useEffect, useRef } from 'react'
import { authClient } from '@/lib/better-auth'

export function useAuthSignIn() {
  const stopListening = useRef<(() => void) | null>(null)

  useEffect(() => () => stopListening.current?.(), [])

  const socialSignIn = async () => {
    const currentURL = new URL(window.location.href)
    const redirect = currentURL.searchParams.get('redirect')
    let destination = new URL('/dashboard', currentURL.origin)

    if (redirect) {
      try {
        const candidate = new URL(redirect, currentURL.origin)

        if (candidate.origin === currentURL.origin) {
          destination = candidate
        }
      } catch {
        // Nothing
      }
    }

    stopListening.current?.()

    const authWindow = openCenteredWindow(
      'about:blank',
      'oauth_popup',
      500,
      600,
    )
    const callbackURL = authWindow
      ? new URL('/oauth-success', currentURL.origin).href
      : destination.href

    try {
      const { data } = await authClient.signIn.social({
        provider: 'github',
        callbackURL,
        disableRedirect: true,
      })

      if (!data?.url) {
        authWindow?.close()
        return
      }

      if (!authWindow) {
        window.location.href = data.url
        return
      }

      if (authWindow.closed) return

      const handleMessage = (event: MessageEvent) => {
        if (
          event.origin !== window.location.origin ||
          event.source !== authWindow ||
          event.data !== 'oauth-success'
        ) {
          return
        }

        stopListening.current?.()
        authWindow.close()
        window.location.replace(destination.href)
      }

      stopListening.current = () => {
        window.removeEventListener('message', handleMessage)
        stopListening.current = null
      }

      window.addEventListener('message', handleMessage)
      authWindow.location.href = data.url
    } catch (error) {
      stopListening.current?.()
      authWindow?.close()
      throw error
    }
  }

  return { socialSignIn }
}

function openCenteredWindow(
  url: string,
  title: string,
  width: number,
  height: number,
) {
  if (!window.top) return null

  const x = window.top.outerWidth / 2 + window.top.screenX - width / 2
  const y = window.top.outerHeight / 2 + window.top.screenY - height / 2

  return window.open(
    url,
    title,
    `popup,width=${width},height=${height},top=${y},left=${x}`,
  )
}
