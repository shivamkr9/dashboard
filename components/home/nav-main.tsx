"use client"


import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { BookOpen, House } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const navMain = [
    {
        title: "Home",
        url: "/",
        icon: House,
    },
    {
        title: "All Subject",
        url: "#",
        icon: BookOpen,
    },
]

export default function NavMain() {
    const pathname = usePathname()
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {navMain.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild className={cn("text-muted-foreground font-normal", pathname === item.url && "text-blue-600 bg-blue-50 font-bold hover:bg-blue-100 hover:text-blue-700")}>
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