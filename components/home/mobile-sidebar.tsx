import { Fragment } from "react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Profile } from "./profile"
import NavMain from "./nav-main"
import NavLearnAndStudy from "./nav-learn-and-study"
import { NavSupportAndContact } from "./nav-support-and-contact"
import { NavActivityAndProgress } from "./nav-activity-and-progress"
import { AlignJustify, Bell, CircleHelp, Search } from "lucide-react"
import { Input } from "../ui/input"


export default function MobileSidebar() {
    return (
        <Fragment>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="md:hidden flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-[#565E6C]">Logo</h1>
                        <Sheet >
                            <SheetTrigger asChild>
                                <Button variant="secondary" className="bg-transparent" size="icon">
                                    <AlignJustify className="size-6 stroke-blue-500 hover:stroke-blue-600" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="gap-0">
                                <SheetHeader className="">
                                    <SheetTitle className="sr-only">Profile</SheetTitle>
                                    <Profile />
                                </SheetHeader>
                                <div className="grid overflow-y-auto">
                                    <NavMain />
                                    <hr className="mx-4" />
                                    <NavLearnAndStudy />
                                    <hr className="mx-4" />
                                    <NavSupportAndContact />
                                    <hr className="mx-4" />
                                    <NavActivityAndProgress />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="relative md:block hidden">
                        <Input placeholder="Search.." className="pl-8 focus:ring-0 outline-0 focus-visible:border-0 w-[500px]" />
                        <div className="absolute top-2 left-2">
                            <Search className="size-5" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant={"ghost"} size={"icon"} className="rounded-full">
                        <Bell className="size-5  stroke-blue-500" />
                    </Button>
                    <Button variant={"ghost"} size={"icon"} className="rounded-full">
                        <CircleHelp className="size-5  stroke-blue-500" />
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}



