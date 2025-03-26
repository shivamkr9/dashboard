import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import * as React from "react"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

type Props = {}

export default function Bookmarks({ }: Props) {
    return (
        <div className='my-16'>
            <div className='flex justify-between items-center'>
                <h1 className="text-[#3E3A51] font-bold md:text-[40px] text-[20px]">Bookmarks</h1>
            </div>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-4">

                    <CarouselItem className="basis-sm md:basis-lg">
                        <div className="rounded-lg">
                            <Card className='min-h-[250px] text-white bg-gradient-to-r from-[#04608E] to-[#22BBCD] relative'>
                                <CardHeader className=" py-4">
                                    <span className="md:text-2xl text-xl font-semibold">Information Technology</span>
                                    <CardDescription className='text-white'>Saved: 01/01/2025</CardDescription>
                                </CardHeader>
                                <Image src={"./icons/ct.svg"} alt="icon" width={100} height={100} className="size-[200px] absolute  bottom-0 right-0 " />
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-sm md:basis-lg">
                        <div className="rounded-lg">
                            <Card className='min-h-[250px] text-white bg-gradient-to-r from-[#D93B02] to-[#F59801] relative'>
                                <CardHeader className=" py-4">
                                    <span className="md:text-2xl text-xl font-semibold">Information Technology</span>
                                    <CardDescription className='text-white'>Saved: 01/01/2025</CardDescription>
                                </CardHeader>
                                <Image src={"./icons/ct.svg"} alt="icon" width={100} height={100} className="size-[200px] absolute  bottom-0 right-0 " />
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-sm md:basis-lg">
                        <div className="rounded-lg">
                            <Card className='min-h-[250px] text-white bg-gradient-to-r from-[#D30F7B] to-[#EF3F7F] relative'>
                                <CardHeader className=" py-4">
                                    <span className="md:text-2xl text-xl font-semibold">Information Technology</span>
                                    <CardDescription className='text-white'>Saved: 01/01/2025</CardDescription>
                                </CardHeader>
                                <Image src={"./icons/ct.svg"} alt="icon" width={100} height={100} className="size-[200px] absolute  bottom-0 right-0 " />
                            </Card>
                        </div>
                    </CarouselItem>

                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    )
}