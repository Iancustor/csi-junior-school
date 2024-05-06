import React from "react";
export const metadata = {
  title: "About ",
  description:
    "CSI Junior School Kireka: Nurturing young minds. Call +256704442850. Motto: Train up a child..Proverbs 22:6",
    alternates: {
      canonical: "/about",
      languages: {
        "en-US": "/en-US",
      },
    },
};
function page() {
  return (
    <div>
      <section className="flex text-gray-100 bg-center bg-no-repeat items-center px-6 bg-cover  h-[40vh] bg-gray-900 bg-[url('/images/csi0.jpg')]  bg-blend-multiply">
        <div className="flex flex-col gap-3 font-bold px-10">
          <p>Know Us Better</p>
          <h1 className="text-3xl  mb-6">ABOUT CSI </h1>
        </div>
      </section>
      <section className="flex flex-col gap-7 px-6 mt-4 justify-center">
        <p>
          CSI Junior School Kireka is a private, christian founded junior
          primary school, located in Kireka,Kinawataka road, just below prime
          radio. It is a school that offers the Ugandan national curriculum. In
          addition to the national curriculum, CSI Junior School incorporates
          unique progammes that enable our pupils to be disciplined,
          knowledgeable, confident, practical and responsible in a diverse and
          ever-changing world. CSI Junior School aspires to groom the next
          generation of young leaders. We focus on establishing a “whole-child”
          mindset with a belief that all pupils have genius and everyone can be
          a leader.
        </p>
        <p>
          CSI Junior School Kireka and CSI daycare centre were founded in 2011
          under a CSI Junior School Kireka and CSI daycare centre were founded
          in 2011 under a christian foundation though children of all religions
          inclinations are admitted and well centred for. The school provides a
          unique learning experience for children aged two to thirteen years.
          Our curriculum caters to a variety of co-curricular programmes that
          enable holistic primary education. We provide an intellectually
          challenging learning experience from which all learners can benefit.
          Our objective is that each pupil should develop a deep interest in,
          and love for learning.
        </p>
        <p>Our pupils come from different parts of the world.</p>
      </section>
      <section className="flex flex-col gap-20 text-gray-100 bg-center bg-no-repeat items-center py-60 mt-4 justify-center px-6  bg-cover  bg-[url('/images/csi2.jpg')] h-[50vh] bg-gray-800  bg-blend-multiply">
        <div className="flex  items-center justify-center flex-col">
          <h2 className="font-semibold">CSI VISION</h2>
          <p>
            "Christ Our Foundation, Character our priority and community our
            responsibility"
          </p>
        </div>
        <div className="flex  items-center justify-center flex-col">
          <h2 className="font-semibold">CSI MISSION</h2>
          <p>
            "To provide a sustainable holistic education resulting in academic
            excellence and a balanced God fearing individual able to meet the
            challenges of a modern society"
          </p>
        </div>
        <div className="flex  items-center justify-center flex-col">
          <h2 className="font-semibold">CSI MOTTO</h2>
          <p>"Train up a child... (proverbs:22:6)"</p>
        </div>
      </section>
      <section className="flex flex-col gap-4  mt-3">
        <h2 className="text-center font-semibold text-2xl ">CSI CORE VALUES</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4 px-8">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Social development:</h2>
            <p className="w-80">
              "children learn to relate with their peers and adults; appreciate
              diverse points of view; participate, volunteer and cooperate with
              each other as they learn to resolve conflict."
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Intellectual inquiry:</h2>
            <p className="w-80">
              "Children are empowered to explore their own ideas to become
              independent, creative, innovative, confident and critical
              thinkers"
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Cultural development:</h2>
            <p className="w-80">
              "children learn to appreciate cultural influence; appreciate the
              role of participation in culture opportunities; understand,
              accept, respect and celebrate cultural diversity."
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Spiritual development:</h2>
            <p className="w-80">
              "children explore religious beliefs and experiences; respect
              faiths, feelings and values enjoy developing their understanding
              of themselves, others and the surrounding."
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Moral development:</h2>
            <p className="w-80">
              "children learn to appreciate right and wrong, respect for rules,
              understand consequences, investigate moral and ethical issues and
              consequently offer reasoned points of view."
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Leadership development:</h2>
            <p className="w-80">
              "children are empowered with leadership and life skills through
              active participation in diverse leadership roles to prepare them
              for emerging challenges."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
