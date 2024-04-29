import { Heading } from "@/components/Heading";
import MapComponent from "@/components/MapComponent";
import { Mail, Phone } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex text-gray-100 bg-center bg-no-repeat items-center px-6 bg-cover  h-[40vh] bg-gray-900 bg-[url('/images/csi0.jpg')]  bg-blend-multiply">
        <div className="flex flex-col gap-3 font-bold px-10">
          <p>Talk To Us</p>
          <h1 className="text-3xl  mb-6">CONTACT CSI </h1>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row lg:justify-evenly gap-6 lg:gap-20">
        <div className="flex flex-col  gap-8 px-6">
          <h2 className="font-bold text-2xl">LEAVE US YOUR INFO</h2>
          <p className="lg:w-[45vw]">
            Connect with us at Christ Sanctuary International Junior School to
            embark on a transformative educational experience for your child.
            Discover our enriching curriculum, dedicated educators, and vibrant
            community. Together, let's inspire a love for learning and unlock
            your child's full potential. Admission awaits!
          </p>
          <form action="#" id="contactForm" className="space-y-4 lg:w-[45vw]">
            <div>
              <input
                type="name"
                id="name"
                className="shadow-sm text-sm rounded-sm px-4  placeholder-gray-900 font-semibold outline-transparent bg-gray-200  block w-full p-2.5"
                placeholder="FullName -"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="shadow-sm text-sm rounded-sm px-4 placeholder-gray-900 font-semibold outline-transparent bg-gray-200  block w-full p-2.5"
                placeholder="Email -"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className="shadow-sm text-sm rounded-sm px-4 placeholder-gray-900 font-semibold outline-transparent bg-gray-200  block w-full p-2.5"
                placeholder="Subject -"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                className="shadow-sm text-sm rounded-sm px-4 placeholder-gray-900 font-semibold outline-transparent bg-gray-200  block w-full p-2.5"
                placeholder="Message -"
              ></textarea>
            </div>
            <button
              type="submit"
              className="dark:text-gray-950 text-gray-50 py-3 px-5 text-sm font-medium text-center bg-gray-800 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-white dark:hover:bg-white dark:focus:ring-offset-white"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="flex flex-col  gap-4 px-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">OUR LOCATION</h2>
            <h2 className="">
              Kireka Hill <br />
              Near Prime Radio
            </h2>
            <span className="  flex gap-4">
              <Mail className="" />
              csijuniorsch@gmail.com
            </span>
            <div className="flex gap-2">
              <span className="  flex gap-4">
                <Phone />
                +256 702-983-617{" "}
              </span>
              <span className="">+256 704-442-850</span>
            </div>
          </div>
          <div className=" flex flex-col gap-3 px-4">
            <h2 className="font-bold text-2xl">MAP</h2>
            <MapComponent width={"100"} height={"400"} />
          </div>
        </div>
      </section>
   
    </div>
  );
}

export default page;
