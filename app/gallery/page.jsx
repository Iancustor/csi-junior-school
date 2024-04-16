"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal"; // Import the Modal component

function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  const uniformImages = [
    {
      id: "1",
      img: "/images/csi0.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "2",
      img: "/images/csi.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "3",
      img: "/images/csi2.jpg",
      title: "Image ",
      author: "Author 3",
    },
    { id: "4", img: "/images/csi4.jpg", title: "Image ", author: "Author 1" },
    { id: "5", img: "/images/csi3.jpg", title: "Image ", author: "Author 2" },
    {
      id: "6",
      img: "/images/csi4.jpg",
      title: "Image ",
      author: "Author 3",
    },
  ];
  const curricularImages = [
    {
      id: "1",
      img: "/images/csi.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "2",
      img: "/images/csi0.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "3",
      img: "/images/csi2.jpg",
      title: "Image ",
      author: "Author 3",
    },
    { id: "4", img: "/images/csi4.jpg", title: "Image ", author: "Author 1" },
    { id: "5", img: "/images/csi3.jpg", title: "Image ", author: "Author 2" },
    {
      id: "6",
      img: "/images/csi3.jpg",
      title: "Image ",
      author: "Author 3",
    },
  ];
  const tripImages = [
    {
      id: "1",
      img: "/images/csi4.jpg",
      title: "Image ",
      author: "Author 1",
    },
    {
      id: "2",
      img: "/images/csi0.jpg",
      title: "Image ",
      author: "Author 2",
    },
    {
      id: "3",
      img: "/images/csi.jpg",
      title: "Image ",
      author: "Author 3",
    },
    { id: "4", img: "/images/csi4.jpg", title: "Image ", author: "Author 1" },
    { id: "5", img: "/images/csi3.jpg", title: "Image ", author: "Author 2" },
    {
      id: "6",
      img: "/images/csi2.jpg",
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
      <div className="flex flex-col gap-6 mt-4 px-2">
        <section>
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
      <div className="flex flex-col gap-6 mt-4 px-2">
        <section>
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
      <div className="flex flex-col gap-6 mt-4 px-2">
        <section>
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
      <Modal
        isOpen={!!selectedImage}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
}

export default Page;
