import Bookmarks from "@/components/home/bookmarks";
import Hero from "@/components/home/hero";
import Learning from "@/components/home/learning";
import Notes from "@/components/home/notes";
import Subjects from "@/components/home/subjects";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Learning />
      <Subjects />
      <Bookmarks />
      <Notes />
    </div>
  )
}
