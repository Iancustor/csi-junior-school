import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <h2>Gallery</h2>
      <section className=" ">
        <div class="grid gap-2  grid-cols-2">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/csi.png"
              key=""
              width={1080}
              height={1080}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
