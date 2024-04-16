import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const Modal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-90">
      <div className="relative bg-white rounded-lg max-w-6xl">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-300 hover:text-gray-600"
        >
          <X />
        </button>
        <Image
          width={1080}
          height={1080}
          src={imageUrl}
          alt="Selected Image"
          className="w-full h-[85vh] rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default Modal;
