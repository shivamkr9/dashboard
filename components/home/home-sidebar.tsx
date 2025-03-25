
import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail
} from "@/components/ui/sidebar"
import { NavActivityAndProgress } from "./nav-activity-and-progress"
import NavLearnAndStudy from "./nav-learn-and-study"
import NavMain from "./nav-main"
import { NavSupportAndContact } from "./nav-support-and-contact"
import { Profile } from "./profile"


export function HomeSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}
            collapsible="none"
            className="sticky hidden md:flex top-0 h-svh border-r">
            <SidebarHeader className="bg-background text-2xl font-bold text-[#565E6C] pl-4 py-3">
                Logo
            </SidebarHeader>
            <hr className="mx-4" />
            <SidebarHeader className="bg-background text-2xl font-bold text-[#565E6C] pl-4 py-3">
                <Profile />
            </SidebarHeader>
            <SidebarContent className="bg-background text-foreground">
                <NavMain />
                <hr className="mx-4" />
                <NavLearnAndStudy />
                <hr className="mx-4" />
                <NavSupportAndContact />
                <hr className="mx-4" />
                <NavActivityAndProgress />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
