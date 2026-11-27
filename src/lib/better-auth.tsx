import { createIsomorphicFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3333',
})

export const getSession = createIsomorphicFn()
  .server(() => {
    const cookie = getRequestHeader('cookie')

    return authClient.getSession({
      fetchOptions: { headers: cookie ? { cookie } : undefined },
    })
  })
  .client(() => authClient.getSession())
