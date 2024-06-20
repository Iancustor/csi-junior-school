import MapComponent from "@/components/MapComponent";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Contact ",
  description: "CSI Junior Academy",
  alternates: {
    canonical: "/contacts",
    languages: {
      "en-US": "/en-US",
    },
  },
};

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
            Connect with us at CSI Junior School Kireka to embark on a
            transformative educational experience for your child. Discover our
            enriching curriculum, dedicated educators, and vibrant community.
            Together, let's inspire a love for learning and unlock your child's
            full potential. Admission awaits!
          </p>
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
        </div>
      </section>
      <div className="lg:container h-full  ">
        <div className="flex h-full flex-wrap items-center justify-center ">
          <div className="w-full">
            <div className="block rounded-lg shadow-lg bg-sky-50 ">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none  ">
                  {/* style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" */}

                  <div className="px-4 py-6  md:mx-6 md:p-12">
                    <Image
                      width={900}
                      height={1000}
                      src="/images/csi3.jpg"
                      className="w-auto h-auto lg:h-[30rem] lg:w-[50rem] rounded-md lg:object-cover"
                      alt=""
                    />
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div className=" md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12 ">
                    <div className=" w-auto  bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50 bg-opacity-10  py-8 px-8 h-auto rounded-md">
                      <form action="#" id="contactForm" className="space-y-4 ">
                        <h2 className="text-2xl font-bold">Talk To Us</h2>
                        <div>
                          <input
                            type="name"
                            id="name"
                            className="shadow-sm text-sm rounded-sm px-4  placeholder-gray-900 font-semibold outline-transparent bg-gray-50  block w-full p-2.5"
                            placeholder="FullName -"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            id="email"
                            className="shadow-sm text-sm rounded-sm px-4 placeholder-gray-900 font-semibold outline-transparent bg-gray-50  block w-full p-2.5"
                            placeholder="Email -"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            id="subject"
                            className="shadow-sm text-sm rounded-sm px-4 placeholder-gray-900 font-semibold outline-transparent bg-gray-50  block w-full p-2.5"
                            placeholder="Subject -"
                            required
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <textarea
                            id="message"
                            rows="6"
                            className="shadow-sm text-sm rounded-sm px-4 placeholder-gray-900 font-semibold outline-transparent bg-gray-50  block w-full p-2.5"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
