import Image from "next/image";
import Link from "next/link";
import React from "react";

function ActivityCard() {
  const activities = [
    {
      img: "/images/csi.jpg",
      title: "Our Facilities",
      desc: " Our school facilities can house up to 555 students and cater for both males and females",
    },
    {
      img: "/images/csi4.jpg",
      title: "Students",
      desc: "We have designed our curriculum to prepare our children to compete nationally and globally",
    },
    {
      img: "/images/csi3.jpg",
      title: "Admissions",
      desc: "Admissions of Nursery pupils shall depend on their age. Parents are welcome to apply now",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
      {activities.map((activity) => {
        return (
          <div className="py-4 px-6 w-96 flex flex-col gap-5 items-center justify-center">
            <Image
              className="w-96 h-64 border-gray-300 rounded-md border-2"
              src={activity.img}
              alt={activity.title}
              height={1080}
              width={1080}
            />
            <h2 className="font-bold text-2xl text-gray-950">
              {activity.title}
            </h2>
            <p>{activity.desc}</p>
            <Link
              href="about"
              className="bg-gray-900 text-gray-100 py-2 px-4 rounded-md"
            >
              Learn More
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ActivityCard;
