import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {}

export default function Subjects({ }: Props) {
    return (
        <div className='my-16'>
            <div className='flex justify-between items-center'>
                <h1 className="text-[#3E3A51] font-bold md:text-[40px] text-[20px]">All your subjects</h1>
                <Button size={"sm"} variant={"ghost"}>
                    <span>View all</span>
                    <ArrowRight className='size-4' />
                </Button>
            </div>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                            <div className="p-4 bg-[#EBE8FF] rounded-lg">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
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