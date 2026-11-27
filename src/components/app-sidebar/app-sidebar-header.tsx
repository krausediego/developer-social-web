import { Grid2x2Plus } from 'lucide-react'
import { SidebarMenu, SidebarMenuItem } from '../ui/sidebar'

export function AppSidebarHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex gap-1.5">
        <Grid2x2Plus className="text-primary" strokeWidth={1} />
        <h3 className="font-medium">Developer</h3>
        <p className="text-muted-foreground text-pretty">Social</p>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
