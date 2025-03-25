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
import { NotebookPen, Presentation, SquarePen, SquarePlay } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

const learnAndStudy = [
    {
        title: "My class",
        url: "#",
        icon: SquarePlay,
    },
    {
        title: "My notes",
        url: "#",
        icon: NotebookPen,
    },
    {
        title: "My exam",
        url: "#",
        icon: SquarePen,
    },
    {
        title: "Request tutor",
        url: "#",
        icon: Presentation,
    }
]

export default function NavLearnAndStudy() {
    const pathname = usePathname()
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-[14px] font-bold">Learn and Study</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {learnAndStudy.map((item) => (
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