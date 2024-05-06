"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal"; // Import the Modal component

// export const metadata = {
//   title: "Gallery ",
//   description: "CSI Junior Academy",
//   alternates: {
//     canonical: "/gallery",
//     languages: {
//       "en-US": "/en-US",
//     },
//   },
// };

function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  const uniformImages = [
    {
      id: "1",
      img: "/images/uniform/uni6.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "2",
      img: "/images/uniform/uni2.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "3",
      img: "/images/uniform/uni3.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "4",
      img: "/images/uniform/uni4.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "5",
      img: "/images/uniform/uni5.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "6",
      img: "/images/uniform/uni8.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "7",
      img: "/images/uniform/uni7.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "10",
      img: "/images/uniform/uni10.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "11",
      img: "/images/uniform/uni11.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "12",
      img: "/images/uniform/uni12.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "14",
      img: "/images/uniform/uni14.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "15",
      img: "/images/uniform/uni15.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "9",
      img: "/images/uniform/uni9.jpg",
      title: "Image ",
      author: "Author 3",
    },
  ];
  const scoutImages = [
    {
      id: "1",
      img: "/images/scout/scout1.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "2",
      img: "/images/scout/scout2.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "3",
      img: "/images/scout/scout3.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "4",
      img: "/images/scout/scout4.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "5",
      img: "/images/scout/scout5.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "6",
      img: "/images/scout/scout6.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "7",
      img: "/images/scout/scout7.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "8",
      img: "/images/scout/scout8.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "9",
      img: "/images/scout/scout9.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "10",
      img: "/images/scout/scout10.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "11",
      img: "/images/scout/scout11.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "12",
      img: "/images/scout/scout12.jpg",
      title: "Image ",
      author: "Author 2",
    },
  ];
  const curricularImages = [
    {
      id: "1",
      img: "/images/mdd/mdd1.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "2",
      img: "/images/mdd/mdd2.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "3",
      img: "/images/mdd/mdd3.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "4",
      img: "/images/mdd/mdd4.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "5",
      img: "/images/mdd/mdd5.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "6",
      img: "/images/mdd/mdd11.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "7",
      img: "/images/mdd/mdd7.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "8",
      img: "/images/mdd/mdd8.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "9",
      img: "/images/mdd/mdd9.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "10",
      img: "/images/mdd/mdd10.jpg",
      title: "Image ",
      author: "Author 2",
    },
    // {
    //   id: "11",
    //   img: "/images/mdd/mdd6.jpg",
    //   title: "Image ",
    //   author: "Author 2",
    // },
    {
      id: "12",
      img: "/images/mdd/mdd12.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "13",
      img: "/images/mdd/mdd13.jpg",
      title: "Image ",
      author: "Author 2",
    },
  ];
  const tripImages = [
    {
      id: "1",
      img: "/images/trip/trip1.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "2",
      img: "/images/trip/trip2.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "3",
      img: "/images/trip/trip3.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "4",
      img: "/images/trip/trip4.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "5",
      img: "/images/trip/trip5.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "6",
      img: "/images/trip/trip6.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "7",
      img: "/images/trip/trip7.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "8",
      img: "/images/trip/trip8.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "9",
      img: "/images/trip/trip9.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "10",
      img: "/images/trip/trip10.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "11",
      img: "/images/trip/trip11.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "12",
      img: "/images/trip/trip12.jpg",
      title: "Image ",
      author: "Author 3",
    },
  ];
  const poolImages = [
    {
      id: "1",
      img: "/images/pool/pool1.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "3",
      img: "/images/pool/pool3.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "4",
      img: "/images/pool/pool4.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "5",
      img: "/images/pool/pool5.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "6",
      img: "/images/pool/pool6.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "7",
      img: "/images/pool/pool12.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "8",
      img: "/images/pool/pool8.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "9",
      img: "/images/pool/pool9.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "10",
      img: "/images/pool/pool10.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "11",
      img: "/images/pool/pool11.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "12",
      img: "/images/pool/pool12.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "13",
      img: "/images/pool/pool13.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "14",
      img: "/images/pool/pool14.jpg",
      title: "Image ",
      author: "Author 3",
    },
    {
      id: "15",
      img: "/images/pool/pool7.jpg",
      title: "Image ",
      author: "Author 3",
    },
  ];
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <section className="flex text-gray-100 bg-center bg-no-repeat items-center px-6 bg-cover  h-[40vh] bg-gray-700 bg-[url('/images/csi0.jpg')]  bg-blend-multiply">
        <div className="flex flex-col gap-3 font-bold px-10">
          <p>CSI Gallery</p>
          <h1 className="text-3xl  mb-6"> GALLERY</h1>
        </div>
      </section>
      <div className="flex flex-col gap-8 mt-6 px-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold ">OUR UNIFORM</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {uniformImages.map((tile, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded overflow-hidden"
              >
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => openModal(tile.img)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-8 mt-6 px-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold ">SCOUTS</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {scoutImages.map((tile, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded overflow-hidden"
              >
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => openModal(tile.img)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-8 mt-6 px-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold "> CO-CURRICULAR </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {curricularImages.map((tile, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded overflow-hidden"
              >
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => openModal(tile.img)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-8 mt-6 px-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold ">SCHOOL TRIP </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {tripImages.map((tile, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded overflow-hidden"
              >
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => openModal(tile.img)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex flex-col gap-8 mt-6 px-2">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold uppercase">Swimming Pool </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {poolImages.map((tile, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded overflow-hidden"
              >
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="w-full h-auto cursor-pointer"
                  onClick={() => openModal(tile.img)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Modal
        isOpen={!!selectedImage}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
}

export default Page;
