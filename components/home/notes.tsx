
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
export default function Notes() {
    return (
        <div className='my-16'>
            <div className='flex justify-between items-center'>
                <h1 className="text-[#3E3A51] font-bold md:text-[40px] text-[20px]">My Notes</h1>
            </div>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-4">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-sm md:basis-lg">
                            <div className="p-4 bg-[#EBE8FF] rounded-lg">
                                <Card>
                                    <CardContent className="flex  aspect-video max-h-[180px]
                                     items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    )
}