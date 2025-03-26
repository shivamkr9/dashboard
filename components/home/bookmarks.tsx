

"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";

interface Bookmark {
    id: string;
    title: string;
    color: string;
    savedDate: string
    // Add other properties as needed
}

export default function Bookmarks() {
    // Sample data - replace with your actual data source
    const bookmarks: Bookmark[] = [
        {
            id: "1",
            title: "Information Technology",
            savedDate: "2025-01-01",
            color: "text-white bg-gradient-to-r from-[#04608E] to-[#22BBCD]"
        },
        {
            id: "2",
            title: "Information Technology",
            color: "text-white bg-gradient-to-r from-[#D93B02] to-[#F59801]",
            savedDate: "2025-01-01",
        },
        {
            id: "3",
            title: "Information Technology",
            color: "text-white bg-gradient-to-r from-[#D30F7B] to-[#EF3F7F]",
            savedDate: "2025-01-01",
        },
    ];

    return (
        <section className="w-full py-8 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-[#3E3A51] font-bold md:text-[40px] text-[20px]">Bookmarks</h1>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,

                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="">
                        {bookmarks.map((subject) => (
                            <CarouselItem key={subject.id} className="basis-full md:basis-1/3 ">
                                <Link href={`#`}>
                                    <Card className={`${subject.color}  aspect-video overflow-hidden border-0 shadow-sm rounded-xl relative`}>
                                        <CardHeader className=" py-4">
                                            <span className="md:text-2xl text-xl font-semibold">{subject.title}</span>
                                            <CardDescription className='text-white'>Saved: {subject.savedDate.toString()}</CardDescription>
                                        </CardHeader>
                                        <Image src={"./icons/ct.svg"} alt="icon" width={100} height={100} className="size-[120px] absolute  bottom-0 right-0 " />
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant={"ghost"} className="absolute md:-left-4 left-1/3 md:top-1/2 bottom-0 md:-translate-y-1/2 translate-y-24 bg-[#EBE8FF] " />
                    <CarouselNext variant={"ghost"} className="absolute md:-right-4 right-1/3 md:top-1/2 md:bottom-0 md:-translate-y-1/2 translate-y-24 bg-[#EBE8FF] " />
                </Carousel>

            </div>
        </section>
    );
}