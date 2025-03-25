"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, LockOpen, Phone, Plus } from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"

const profileMenu = [
    {
        title: "Pricavy Policy",
        url: "#",
        icon: LockOpen,
    },
    {
        title: "Contact Us",
        url: "#",
        icon: Phone,
    },
    {
        title: "Log Out",
        url: "#",
        icon: LockOpen,
    },
]

export function Profile() {
    const { isMobile } = useSidebar()
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            className="data-[state=open]:bg-background data-[state=open]:text-foreground p-0 hover:bg-background data-[state=close]:outline-0 data-[state=close]:border-0 focus-visible:ring-0"
                        >
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <span className="ml-2">My Exampe</span>
                            <ChevronDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg p-0"
                        align="start"
                        side={isMobile ? "bottom" : "bottom"}
                        sideOffset={4}
                    >
                        {profileMenu.map((team, index) => (
                            <DropdownMenuItem
                                key={team.title}
                                className="gap-2 p-2 m-1"
                            >
                                <div className="flex size-6 items-center justify-center rounded-sm">
                                    <team.icon className="size-4 shrink-0" />
                                </div>
                                {team.title}
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator className="mb-0" />
                        <div className="bg-blue-500 px-2 py-3 text-center text-background">
                            <h1>example@gmail.com</h1>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
