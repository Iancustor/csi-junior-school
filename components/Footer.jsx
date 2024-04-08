import React from "react";
import Link from "next/link";
import Image from "next/image";
import MapComponent from "./MapComponent";

function FooterCompo() {
  const mediaLinks = [
    { name: "Facebook", href: "#", img: "/images/facebook.png" },
    { name: "Twitter", href: "#", img: "/images/twitter.jpeg" },
    { name: "Instagram", href: "#", img: "/images/instagram.jpeg" },
    { name: "Youtube", href: "#", img: "/images/youtube.jpeg" },
  ];
  return (
    <div>
      <div className="bg-gray-900 text-gray-50">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between  ">
            <div className="flex flex-col px-4 gap-4">
              {" "}
              <div className="flex flex-col">
                <div className="mb-6 md:mb-0 f">
                  <Link
                    href="/"
                    className="flex   space-x-3 rtl:space-x-reverse"
                  >
                    <Image
                      src=""
                      className="w-8 rounded-md"
                      alt="CSI Junior School-Logo"
                      width={1080}
                    />
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
                      CSI JUNIOR SCHOOL
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="">Reach us at our Campus</h2>
                  <h2 className="">
                    Kireka Hill <br />
                    Near Prime Radio
                  </h2>
                  <p className="font-semibold">0702983617 / 0704442850</p>
                  <p className="font-semibold">csijunioracademy@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start ">
                {mediaLinks.map((mediaLink) => {
                  return (
                    <Link href={mediaLink.href}>
                      <Image
                        src={mediaLink.img}
                        alt={mediaLink.name}
                        width={1080}
                        height={1080}
                        className="w-6 h-6 rounded-md"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className=" flex flex-col gap-3 px-4">
              <h2 className="font-bold text-2xl">Directions</h2>
              <MapComponent width={"auto"} height={"300"} />
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex flex flex-col lg:flex-row gap-2 items-center justify-center  sm:items-center sm:justify-between">
            <span className="text-sm flex gap-2  sm:text-center text-gray-50">
              <span className="flex ">2024</span>
              <Link href="/" className="hover:underline">
                CSI JUNIOR SCHOOL
              </Link>
              . All Rights Reserved.
            </span>
            <Link
              className="text-sm text-muted-foreground hover:text-gray-100"
              href={"https://custordev.vercel.app/"}
            >
              Developed by CustorDev{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCompo;
