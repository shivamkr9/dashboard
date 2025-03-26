import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

export default function Subjects() {
    const subjects = [
        {
            id: 1,
            title: "Artificial Intelligence",
            color: "bg-gray-800",
        },
        {
            id: 2,
            title: "Mathematics",
            color: "bg-gray-700",
        },
        {
            id: 3,
            title: "Chemistry",
            color: "bg-gray-800",
        },
        {
            id: 4,
            title: "Physics",
            color: "bg-gray-700",
        },
        {
            id: 5,
            title: "Biology",
            color: "bg-gray-800",
        },
    ]

    return (
        <section className="w-full py-8 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-[#3E3A51] font-bold md:text-[40px] text-[20px]">Access all your subjects</h1>
                    <div className="hidden md:flex items-center gap-1">
                        <Link href="#" className="text-sm text-purple-500">
                            View all
                        </Link>
                        <span className="text-sm">→</span>
                    </div>
                </div>

                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,

                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="">
                        {subjects.map((subject) => (
                            <CarouselItem key={subject.id} className="pl-4 basis-full md:basis-1/3 ">
                                <Link href={`#`}>
                                    <div className="p-4 bg-[#EBE8FF] rounded-lg">

                                        <Card className={`${subject.color} overflow-hidden border-0 shadow-sm rounded-xl p-0`}>
                                            <CardContent className="p-0">
                                                <div className={`${subject.color} aspect-square relative`}>
                                                    <div className="flex items-center justify-center h-full">
                                                        <h3 className="text-white font-medium">{subject.title}</h3>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant={"ghost"} className="absolute md:-left-4 left-1/3 md:top-1/2 bottom-0 md:-translate-y-1/2 translate-y-44 bg-[#EBE8FF] " />
                    <CarouselNext variant={"ghost"} className="absolute md:-right-4 right-1/3 md:top-1/2 md:bottom-0 md:-translate-y-1/2 translate-y-44 bg-[#EBE8FF] " />
                </Carousel>

            </div>
        </section>
    )
}

