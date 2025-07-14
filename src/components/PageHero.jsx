import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const PageHero = ({ img, title, description, back = null }) => {
  return (
    <div className="relative h-80 bg-emerald-800 flex items-center">
      <div className="absolute inset-0">
        <Image src={img} alt="AACOE Argungu Campus" fill className="object-cover opacity-70" priority />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {back && (
          <Link href={back.link} className="flex items-center text-white mb-4 hover:underline">
            <FaChevronLeft className="mr-2" />
            Back to {back.name}
          </Link>
        )}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
