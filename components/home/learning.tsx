import {
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";


export default function Learning() {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-[#3E3A51] font-bold md:text-[40px] text-[20px]">Your Hearning Hub</h1>
                <Button className="bg-[#6454D6] hover:bg-[#6454D6] text-background px-16 hidden md:block">Pre Assessment Test</Button>
            </div>
            <div className="bg-[#EBE8FF] p-4 border rounded-md grid md:grid-cols-3 grid-cols-2 gap-2">
                <Card className="rounded-[10px] bg-gradient-to-r from-[#046ED4] to-[#139BE7] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">Talk to AI</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/message.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
                <Card className="rounded-[10px] bg-gradient-to-r from-[#0C799F] to-[#20B7CA] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">Study <br /> Notes</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/Notes.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
                <Card className="rounded-[10px] bg-gradient-to-r from-[#6B53F7] to-[#7E40FC] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">Flash <br />Cards</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/files.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
                <Card className="rounded-[10px] bg-gradient-to-r from-[#CF077A] to-[#EF3E7F] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">Question <br /> Hub</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/help.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
                <Card className="rounded-[10px] bg-gradient-to-r from-[#DE4B02] to-[#F08502] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">My Exam</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/Exam.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
                <Card className="rounded-[10px] bg-gradient-to-r from-[#81BBB0] to-[#8CD3B0] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">My <br />Resource</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/Purchase.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
                <Card className="rounded-[10px] bg-gradient-to-r from-[#636AE8] to-[#CED0F8] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">Connect <br /> Instant <br /> Teacher</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/help.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
                <Card className="rounded-[10px] bg-gradient-to-r from-[#F08502] to-[#FDB45C] text-background min-h-[220px] relative">
                    <CardHeader>
                        <CardTitle className="font-bold text-[36px]">My Videos</CardTitle>
                    </CardHeader>
                    <Image src={"./icons/Exam.svg"} alt="icon" width={100} height={100} className="size-[100px] absolute  bottom-0 right-0 " />

                </Card>
            </div>
        </div>
    )
}