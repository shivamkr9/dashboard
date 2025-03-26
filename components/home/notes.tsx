

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
    // Add other properties as needed
}

export default function Bookmarks() {
    // Sample data - replace with your actual data source
    const bookmarks: Bookmark[] = [
        {
            id: "1",
            title: "Artificial Intelligence",
            color: "bg-gray-800",
        },
        {
            id: "2",
            title: "Mathematics",
            color: "bg-gray-700",
        },
    ];

    return (
        <section className="w-full py-8 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-[#3E3A51] font-bold md:text-[40px] text-[20px]">My Notes</h1>
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
                                    <div className="p-4 bg-[#EBE8FF] rounded-lg">
                                        <Card className={`${subject.color} overflow-hidden border-0 shadow-sm rounded-xl p-0`}>
                                            <CardContent className="p-0">
                                                <div className={`${subject.color} aspect-video relative`}>
                                                    <div className="flex items-center justify-center h-full">
                                                        <h3 className="text-white font-medium">{subject.id}</h3>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
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