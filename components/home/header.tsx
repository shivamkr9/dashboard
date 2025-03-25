import MobileSidebar from "./mobile-sidebar";


export default function Header() {
    return (
        <div className="h-14 w-full md:w-[calc(100vw_-_var(--sidebar-width))] border border-muted fixed top-0 right-0-0 z-40 bg-background flex items-center mx-auto px-4">
            <div className="container mx-auto">
                <MobileSidebar />
            </div>
        </div>
    )
}