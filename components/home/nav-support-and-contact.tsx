"use client"


import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Gift, LinkIcon, SquareSquare, Users2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const supportAndConnectivity = [
    {
        title: "Instant connect",
        url: "#",
        icon: LinkIcon,
    },
    {
        title: "Instant History",
        url: "#",
        icon: SquareSquare,
    },
    {
        title: "Our Community",
        url: "#",
        icon: Users2,
    },
    {
        title: "My Orders",
        url: "#",
        icon: Gift,
    },
]

export function NavSupportAndContact() {
    const pathname = usePathname()
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-[14px] font-bold">Learn and Study</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {supportAndConnectivity.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton size={"lg"} asChild className={cn("text-muted-foreground font-normal", pathname === item.url && "text-blue-600 bg-blue-50 font-bold hover:bg-blue-100 hover:text-blue-700")}>
                                <Link href={item.url}>
                                    {<item.icon />}
                                    {item.title}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}