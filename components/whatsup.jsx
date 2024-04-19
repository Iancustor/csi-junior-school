import Image from "next/image";
import Link from "next/link";
import React from "react";

function Whatsup() {
  return (
    <div className="flex justify-end items-end relative px-5">
      <Link
        href="https://wa.me/256702983617"
        className=" rounded-lg flex gap-2 items-center justify-center text-sm px-4 py-2 text-center bottom-5 fixed mr-5 text-green-500 font-bold"
      >
        <Image
          className="w-8 h-8 rounded-md"
          src="/images/whatsup.png"
          alt=""
          width={225}
          height={255}
        />
        Whatsup
      </Link>
    </div>
  );
}

export default Whatsup;
