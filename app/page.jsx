import ActivityCard from "@/components/ActivityCard";
import { CarouselPlugin } from "@/components/CarouselPlugin";
import HeroHead from "@/components/HeroHead";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-2">
      <section className="flex text-gray-100 bg-center bg-no-repeat items-center justify-center bg-cover  bg-[url('/images/csi0.jpg')] h-[80vh] bg-gray-600  bg-blend-multiply">
        <HeroHead />
      </section>
      <div>
        <ActivityCard />
      </div>
      <section className="flex bg-gray-900 text-gray-100 bg-opacity-900 text--100  items-center justify-center md:py-8 py-3   ">
        <div className="max-w-full flex-col flex md:gap-32 gap-8  md:flex-row   px-8 py-6 ">
          <div className=" ">
            <Image
              className="h-auto max-w-full lg:w-[40rem] rounded-sm"
              src="/images/csilandscape.jpg"
              width={1080}
              height={1080}
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-6  justify-center w-[80%]  ">
            <h2 className="font-semibold text-2xl">About The School</h2>
            <p className="text-[1.1rem]">
              {" "}
              CSI Junior School and CSI day care are situated at Kireka hill,
              Kinawataka road along CSI street consisting of kindergarten
              section offerring programs for pre-school education to children
              aged 3 to 6 years and a primary section for students continuing
              up-to P.7.
            </p>
            <p className="text-[1.1rem]">
              {" "}
              The school has been and will continue to be an academic hub of
              Uganda because of the balanced curriculum offered. We are a
              multi-cultural institution that provides a well-rounded balanced
              education to children from different backgrounds.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-3 items-center justify-center lg:items-start">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-2xl ">In Our Gallery</h2>
          <Link href="gallery " className="underline text-red-600">
            View All
          </Link>
        </div>
        <CarouselPlugin />
      </div>
    </div>
  );
}

export default page;
