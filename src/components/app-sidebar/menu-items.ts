import type { LinkProps } from '@tanstack/react-router'

type AppRouteToProps = NonNullable<LinkProps['to']>

type AppSidebarMenu = {
  to: AppRouteToProps
  name: string
}

export function getMenuList(): AppSidebarMenu[] {
  return [
    {
      name: 'Dashboard',
      to: '/dashboard',
    },
  ]
}
