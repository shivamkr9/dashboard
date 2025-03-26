import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search, Star } from 'lucide-react'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <div>
            <div className="relative block md:hidden">
                <Input placeholder="Search.." className="pl-8 focus:ring-0 outline-0 focus-visible:border-0 w-full" />
                <div className="absolute top-2 left-2">
                    <Search className="size-5" />
                </div>
            </div>
            <div className='flex flex-col pb-8 md:justify-start justify-center md:items-start items-center'>
                <div className='py-14 px-8'>
                    <h1 className='text-[40px] font-bold text-[#3E3A51] font-archivo'>Hey student name,</h1>
                    <p className='text-muted-foreground font-normal text-2xl'>Let's Achieve Greatness Today!</p>
                </div>
                <div className="relative mx-auto">
                    <Input placeholder="Search.." className=" p-6 pr-[150px] text-2xl focus:ring-0 outline-0 focus-visible:border-0 md:w-[500px]  w-full rounded-full" />
                    <div className="absolute top-1 right-2">
                        <Button size={"lg"} className='rounded-full bg-gradient-to-r from-[#9348FE]  to-[#3992FE]'>
                            <Star className='size-4 stroke-background' />
                            Ask Genify
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}