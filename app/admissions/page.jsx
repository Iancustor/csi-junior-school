import { AccordionDemo } from "@/components/Accordion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <section className="flex text-gray-100 bg-center bg-no-repeat items-center px-6 bg-cover bg-[url('/images/csi0.jpg')]  h-[40vh] bg-gray-900  bg-blend-multiply">
        <div className="flex flex-col gap-3 font-bold px-10">
          <p>Reach us </p>
          <h1 className="text-3xl  mb-6">ADMISSION </h1>
        </div>
      </section>
      <section className="flex flex-col gap-7 px-6 mt-4 justify-center">
        <p>
          We are pleased that you are interested in CSI Junior School Kireka.
        </p>
        <p>
          At CSI Junior School , we believe in nurturing young minds and shaping
          the leaders of tomorrow. Our commitment to excellence in education is
          unwavering, and we strive to provide a supportive and stimulating
          environment where every child can thrive
        </p>
        <p>Our pupils come from different parts of the world.</p>
      </section>
      <section className="flex flex-col gap-8 px-6 mt-4 justify-center">
        <div className="flex flex-col gap-4">
          {" "}
          <h2 className="font-semibold text-2xl">Admission Information</h2>
          <ol className="flex flex-col gap-3">
            <li>
              <span className="font-semibold">Grade Levels:</span> CSI Junior
              School offers education from Pre-Kindergarten to Grade 6
            </li>
            <li>
              <span className="font-semibold">Admission Process:</span> To
              apply, please fill out our online application form and submit the
              required documents by [insert deadline]. Our admissions team will
              review your application promptly
            </li>
            <li>
              <span className="font-semibold">Curriculum:</span> Our curriculum
              is designed to foster holistic development, blending academic
              rigor with creative exploration and character building
            </li>
            <li>
              <span className="font-semibold">Faculty:</span> Our dedicated team
              of educators is passionate about inspiring a love for learning and
              supporting each child's individual growth
            </li>
            <li>
              <span className="font-semibold">Facilities:</span> Explore our
              state-of-the-art facilities, including well-equipped classrooms,
              libraries, sports fields, and dedicated spaces for arts and
              sciences
            </li>
            <li>
              <span className="font-semibold">Tuition and Fees: </span>
              Information about tuition fees and financial assistance options
              can be found on our website or by contacting the admissions office
              directly
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">CSI FORMS</h2>
          <div className="flex flex-col gap-1">
            <Link
              href="/pdf/applicationForm.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              {" "}
              CSI Admission Form
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              CSI Medical Form
            </Link>
            <Link
              href="/pdf/csiRules.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              CSI School Rules
            </Link>
          </div>
        </div>
      </section>
      <div className="px-8 flex flex-col gap-4 mt-8 lg:flex-row lg:justify-between ">
        <div className="flex flex-col gap-8 ">
          <h2 className="font-semibold text-2xl">Schedule a Visit</h2>
          <p className="lg:w-96">
            We invite you to schedule a visit to experience the vibrant
            atmosphere of CSI Junior School firsthand. Meet our faculty, tour
            our campus, and discover why CSI Junior School is the perfect place
            for your child's educational journey.
          </p>
          <Link
            href="tel:+256704442850"
            className="bg-black py-2 px-2 flex text-sm gap-2 text-white w-20 rounded-md items-center justify-center"
          >
            <Phone />
            Call 
          </Link>
        </div>
        <div className=" ">
          <Image
            className="h-72 max-w-full lg:w-[45vw] rounded-sm object-cover"
            src="/images/csilandscape2.jpg"
            width={1080}
            height={1080}
            alt=""
          />
        </div>
      </div>
      <section className="flex flex-col gap-3 px-6 mt-4 justify-center">
        <h2 className="font-semibold text-xl">Why Choose CSI Junior School?</h2>
        <AccordionDemo />
      </section>

    
    </div>
  );
}

export default page;
