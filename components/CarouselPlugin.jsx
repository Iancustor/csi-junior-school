"use client";
import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
import Modal from "@/components/Modal";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export function CarouselPlugin() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Move one card after a minute
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const imageUrls = [
    "/images/csi2.jpg",
    "/images/csi.jpg",
    "/images/csi3.jpg",
    "/images/csi4.jpg",
    "/images/csi.jpg",
  ];

  const limitedImageUrls = imageUrls.slice(0, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      {limitedImageUrls.map((imageUrl, index) => (
        <div key={index}>
          <Card>
            <CardContent className="flex aspect-square  items-center justify-center p-6">
              <Image
                width={1080}
                height={1080}
                className="w-full h-full object-cover border-gray-300 rounded-md cursor-pointer"
                src={imageUrl}
                onClick={() => openModal(imageUrl)}
                alt={`Image ${index + 1}`}
              />
            </CardContent>
          </Card>
        </div>
      ))}
      <Modal
        isOpen={!!selectedImage}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
}
