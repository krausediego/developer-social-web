import { Link, useLocation } from '@tanstack/react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar'
import { AppSidebarHeader } from './app-sidebar-header'
import { getMenuList } from './menu-items'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation()
  const menuItem = getMenuList()

  return (
    <Sidebar collapsible="icon" className="py-5.5 px-4" {...props}>
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent className="mt-10">
        {menuItem.map(({ name, to }) => {
          return (
            <SidebarMenuItem key={name}>
              <SidebarMenuButton
                variant={
                  pathname.split('/')[1] === to.split('/')[1]
                    ? 'secondary'
                    : 'default'
                }

                tooltip={name}
                asChild
              >
                <Link to={to} className="flex justify-between">
                  <p>{name}</p>
                  {pathname.split('/')[1] === to.split('/')[1] && (
                    <div className="size-1.5 bg-primary rounded-[1px]" />
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarContent>
    </Sidebar>
  )
}
